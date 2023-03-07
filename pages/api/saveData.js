import fs from 'fs/promises';
import path from 'path';

export default async (req, res) => {
    const { video, title } = req.body;
  
    const data = {
      video,
      title,
    };
  
    const filepath = path.join(process.cwd(), "../../src/data/newsDb.json");
    const jsonData = JSON.stringify(data);
  
    try {
      await fs.writeFile(filepath, jsonData);
      res.status(200).json({ message: "Data saved to file!" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Failed to save data to file!" });
    }
  };
  