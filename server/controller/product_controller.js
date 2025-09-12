const productmod = require('../db/productdb'); // Assuming Mongoose model
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid'); // For unique filenames

const uploadDir = path.join(__dirname, '../public/product_img');

// Ensure upload directory exists
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

module.exports = {
    // Add Product
async addproduct(req, res) {
    console.log("📥 Add Product Request Received");

    try {
      // 1. Validate file
      if (!req.files || !req.files.pimage) {
        return res.status(400).json({ msg: "Image file is required" });
      }

      const { pname, pprice, pdetails } = req.body;

      // 2. Validate form fields
      if (!pname || !pprice || !pdetails) {
        return res.status(400).json({ msg: "All fields are required" });
      }
      if (isNaN(Number(pprice))) {
        return res.status(400).json({ msg: "Price must be a valid number" });
      }

      const objimg = req.files.pimage;

      // 3. Validate file type
      const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/webp'];
      if (!allowedTypes.includes(objimg.mimetype)) {
        return res.status(400).json({ msg: "Only JPG, PNG, or WEBP images are allowed" });
      }

      // ✅ 4. Use original file name (as provided by user)
      const fileName = objimg.name;
      const uploadPath = path.join(uploadDir, fileName);

      // 5. Move file
      objimg.mv(uploadPath, async (err) => {
        if (err) {
          console.error("❌ File Upload Error:", err);
          return res.status(500).json({ msg: "File upload failed" });
        }

        // 6. Create DB record
        const insobj = {
          pname,
          pprice,
          pdetails,
          pimage: fileName // ✅ original file name saved
        };

        await productmod.create(insobj);
        console.log("✅ Product Added:", insobj);
        res.json({ msg: "Product added successfully" });
      });

    } catch (error) {
      console.error("❌ Add Product Error:", error);
      res.status(500).json({ msg: "Internal server error" });
    }
  },

    // Get All Products
    async selproduct(req, res) {
        try {
            const data = await productmod.find();
            res.json(data);
        } catch (error) {
            console.error("❌ Select Product Error:", error);
            res.status(500).json({ msg: "Internal server error" });
        }
    },

    // Delete Product by ID
    async delproduct(req, res) {
        try {
            const deleted = await productmod.findByIdAndDelete(req.params.id);
            if (!deleted) {
                return res.status(404).json({ msg: "Product not found" });
            }

            // Optionally delete associated image
            const imagePath = path.join(uploadDir, deleted.pimage);
            if (fs.existsSync(imagePath)) {
                fs.unlinkSync(imagePath);
            }

            res.json({ msg: "Product deleted successfully" });
        } catch (error) {
            console.error("❌ Delete Product Error:", error);
            res.status(500).json({ msg: "Internal server error" });
        }
    },

    // Optional - Update or Edit Product
    // async editproduct(req, res) {
    //     res.json({ msg: "I am Product Edit" });
    // }
};
