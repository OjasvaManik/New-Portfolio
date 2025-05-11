import 'dotenv/config';
import bcrypt from 'bcryptjs';
import dbConnect from '@/lib/dbConnect';
import Admin from '@/models/Admin';

async function main() {
    await dbConnect();
    const hashedPassword = await bcrypt.hash('$mSi@7154050', 12);
    await Admin.create({ email: 'ojasva.manik.3663@gmail.com', password: hashedPassword });
    console.log('Admin created ✅');
}

main().catch(console.error);


// Run: npm install dotenv
// Run: npx tsx scripts/createAdmin.ts