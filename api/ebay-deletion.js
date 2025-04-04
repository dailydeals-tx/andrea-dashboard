export default async function handler(req, res) {
  if (req.method === 'POST') {
    console.log("📬 eBay sent a deletion notification:", req.body);
    res.status(200).json({ message: "Received" });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
