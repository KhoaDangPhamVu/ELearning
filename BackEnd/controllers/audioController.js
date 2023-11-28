const { google } = require("googleapis");

const getAudio = async (req, res) => {
  const fileID = req.params.fileID;

  try {
    const auth = new google.auth.GoogleAuth({
      keyFile: "./googlekey.json",
      scopes: ["https://www.googleapis.com/auth/drive.readonly"],
    });

    const driveService = google.drive({
      version: "v3",
      auth: await auth.getClient(),
    });

    // Use await to wait for the asynchronous request to complete
    const response = await driveService.files.get(
      { fileId: fileID, alt: 'media' },
      { responseType: 'stream' }
    );

    // Pipe the response data to the Express response
    response.data.pipe(res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error huhu' });
  }
};



// module.exports = { getAudio };

// const { google } = require('googleapis');
// const fs = require('fs');

// const GOOGLE_API_FOLDER_ID = '1UVGaKmsT__kuYhp3UUYwlDFqb5zGbNwr';

// let authInstance; // Singleton auth instance

// const getAudio = async (req, res) => {
//   const fileID = req.params.fileID;

//   try {
//     // Create auth instance if not already created
//     if (!authInstance) {
//       const auth = new google.auth.GoogleAuth({
//         keyFile: './googlekey.json',
//         scopes: ['https://www.googleapis.com/auth/drive.readonly'],
//       });

//       authInstance = await auth.getClient();
//     }

//     const driveService = google.drive({
//       version: 'v3',
//       auth: authInstance,
//     });

//     const file = await driveService.files.get({
//       fileId: fileID,
//       fields: 'name,webViewLink,mimeType', // Include mimeType in fields
//     });

//     const fileName = file.data.name;

//     // Use files.export method to generate temporary download link
//     const downloadLink = await driveService.files.export({
//       fileId: fileID,
//       mimeType: 'audio/mpeg',
//     });

//     // Set content headers
//     res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
//     res.setHeader('Content-Type', file.data.mimeType); // Use mimeType from file metadata

//     // Stream the audio file
//     res.status(200);
//     downloadLink.data.pipe(res);
//   } catch (error) {
//     console.error('Error:', error.message);

//     // Provide more specific error message to client
//     if (error.code === 404) {
//       res.status(404).send('Audio file not found');
//     } else {
//       res.status(500).send('Internal Server Error');
//     }
//   }
// };

const API_KEY_PATH = "./googlekey.json";

const getDriveData = async (req, res) => {
  try {
    const fileId = req.params.fileId;

    const auth = new google.auth.GoogleAuth({
      keyFile: API_KEY_PATH,
      scopes: ["https://www.googleapis.com/auth/drive.readonly"],
    });

    const driveService = google.drive({
      version: "v3",
      auth,
    });

    const response = await driveService.files.get({
      fileId,
      fields: "id, name, mimeType",
    });

    const file = response.data;
    res.json({ file });
  } catch (error) {
    console.error("Error retrieving data from Google Drive", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getAudio, getDriveData };
