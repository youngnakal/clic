import Link from "next/link";

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white flex justify-around py-4">
      {/* Home Button */}
      <Link href="/">
        <div className="text-center cursor-pointer">
          <span className="block text-lg">🏠</span>
          <span className="text-sm">Home</span>
        </div>
      </Link>

      {/* Reward Button */}
      <Link href="/reward">
        <div className="text-center cursor-pointer">
          <span className="block text-lg">🎁</span>
          <span className="text-sm">Reward</span>
        </div>
      </Link>

      {/* Referral Button */}
      <Link href="/referral">
        <div className="text-center cursor-pointer">
          <span className="block text-lg">🔗</span>
          <span className="text-sm">Referral</span>
        </div>
      </Link>

      {/* Profile Button */}
      <Link href="/profile">
        <div className="text-center cursor-pointer">
          <span className="block text-lg">👤</span>
          <span className="text-sm">Profile</span>
        </div>
      </Link>
    </nav>
  );
};

export default BottomNav;
