export default function Footer() {
  return (
    <footer aria-label="Site Footer" className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-center sm:justify-start">
            <img src="iconsmall.png"></img>
            <h1 className="pt-4 pl-2">Fairfield Farms</h1>
          </div>

          <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
            Copyright &copy; 2022. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
