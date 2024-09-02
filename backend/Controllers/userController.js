import User from '../models/User.js';

export async function purchasePackage(req, res) {
  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update user's role and purchase status
    user.hasPurchasedPackage = true;
    user.role = 'host';
    await user.save();

    res.json({ message: 'Package purchased successfully, role updated to host.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
