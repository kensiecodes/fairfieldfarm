export default function Header() {
  return (
    <nav className="p-4 bg-gray-100 text-gray-800">
      <div className="container flex justify-between h-16 mx-auto">
        <a
          rel="noopener noreferrer"
          href="#"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <img src="/iconsmall.png" />
          <h1 className="pl-5 pt-2 serif">Fairfield Farms</h1>
        </a>
        <ul className="items-stretch hidden space-x-3 md:flex">
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="/"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
            >
              Home
            </a>
          </li>
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="/about"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
            >
              About
            </a>
          </li>
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="/csa"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent "
            >
              Our CSA
            </a>
          </li>
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-darkblue"
            >
              400-600-5555
            </a>
          </li>
        </ul>
        <button className="flex justify-end p-4 md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  );
}
