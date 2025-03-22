
export default function Navber() {
  return (
    <>
<nav className=" bg-transparent py-4 shadow-md">
<div className="container mx-auto flex items-center justify-between px-4">
<div className="flex gap-6">
  {/* Logo */}
  <div className="text-2xl font-bold text-gray-800">
    <span className="text-red-600">SHERA</span>CARS
  </div>

  {/* Navigation Links */}
  <div className="hidden md:flex items-center space-x-6">
    <a href="#" className="text-gray-700 hover:text-gray-900">
      Home
    </a>
    <div className="relative group">
      <a href="#" className="text-gray-700 hover:text-gray-900 flex items-center">
        Listings
        <svg
          className="w-4 h-4 ml-1 fill-current text-gray-700 group-hover:text-gray-900"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </a>
      {/* Example Dropdown - You'll likely want to manage this state */}
      {/* <div className="absolute z-10 bg-white shadow-lg rounded-md border border-gray-200 mt-2 py-2 w-48 hidden group-hover:block">
        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">New Listings</a>
        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Featured Listings</a>
        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">All Listings</a>
      </div> */}
    </div>
    <div className="relative group">
      <a href="#" className="text-gray-700 hover:text-gray-900 flex items-center">
        Blog
        <svg
          className="w-4 h-4 ml-1 fill-current text-gray-700 group-hover:text-gray-900"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </a>
      {/* Example Dropdown */}
      {/* <div className="absolute z-10 bg-white shadow-lg rounded-md border border-gray-200 mt-2 py-2 w-48 hidden group-hover:block">
        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Recent Posts</a>
        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Categories</a>
      </div> */}
    </div>
    <div className="relative group">
      <a href="#" className="text-gray-700 hover:text-gray-900 flex items-center">
        Pages
        <svg
          className="w-4 h-4 ml-1 fill-current text-gray-700 group-hover:text-gray-900"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </a>
      {/* Example Dropdown */}
      {/* <div className="absolute z-10 bg-white shadow-lg rounded-md border border-gray-200 mt-2 py-2 w-48 hidden group-hover:block">
        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">About Us</a>
        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Services</a>
        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Contact Us</a>
      </div> */}
    </div>
    <a href="#" className="text-gray-700 hover:text-gray-900">
      About
    </a>
    <a href="#" className="text-gray-700 hover:text-gray-900">
      Contact
    </a>
    <div className="flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-gray-500 mr-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
        />
      </svg>
      <span className="text-gray-700">+75 123 456 789</span>
    </div>
  </div>
</div>
  {/* Sign In and Submit Listing Buttons */}
  <div className="flex items-center space-x-4">
    <a href="#" className="text-gray-700 hover:text-gray-900 hidden md:block">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 inline-block mr-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
      Sign in
    </a>
    <button className="bg-white text-gray-700 border border-gray-300 rounded-full px-6 py-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500">
      Submit Listing
    </button>
  </div>

  {/* Mobile Menu Button (Hidden on larger screens) */}
  <div className="md:hidden">
    <button className="text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500">
      <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M4 5h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  </div>
</div>

{/* Mobile Menu (Hidden by default) */}
{/* You would typically manage the visibility of this with state */}
{/* <div className="md:hidden bg-gray-100 py-2">
  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Home</a>
  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Listings</a>
  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Blog</a>
  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Pages</a>
  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">About</a>
  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Contact</a>
  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Sign in</a>
  <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200 focus:outline-none">Submit Listing</button>
</div> */}
</nav>
</>
  )
}


