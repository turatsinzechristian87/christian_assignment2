const express = require('express');
const multer = require('multer');
const app = express();
const port = 3000;

// Set up storage engines for passport photos and certificates
const passportStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/passport/');
  },
  filename: function (req, file, cb) {
    cb(null, 'passport-' + Date.now() + '.' + file.originalname.split('.').pop());
  },
});

const certificateStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/certificates/');
  },
  filename: function (req, file, cb) {
    cb(null, 'certificate-' + Date.now() + '.' + file.originalname.split('.').pop());
  },
});

const passportUpload = multer({ storage: passportStorage, fileFilter: imageFilter });
const certificateUpload = multer({ storage: certificateStorage });

// Define a custom file filter function for image uploads (JPG or PNG)
function imageFilter(req, file, cb) {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(new Error('Only JPG or PNG images are allowed.'));
  }
}

app.post('/upload', passportUpload.single('passportPhoto'), certificateUpload.single('certificates'), (req, res) => {
  res.send('Files uploaded successfully');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
