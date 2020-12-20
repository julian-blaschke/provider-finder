import NavBar from "../components/Navbar";
import Preferences from "../components/Preferences";

const results = [
  { name: "A1 Family Bundle", price: 35, link: "www.google.at" },
  { name: "A1 Family Bundle", price: 35, link: "www.google.at" },
  { name: "A1 Family Bundle", price: 35, link: "www.google.at" },
];

function Result({ rank, name, price, link }) {
  return (
    <div className="p-2 flex flex-row bg-gray-100 shadow justify-between items-center rounded">
      <div className="flex flex-row items-center">
        <span className="font-semibold text-lg text-purple-600">#{rank}</span>
        <div className="ml-4">
          <h2 className="text-sm">{name}</h2>
          <p className="text-xs font-semibold">€ {price} / month</p>
        </div>
      </div>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11"
          stroke="#1A202C"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M15 3H21V9"
          stroke="#1A202C"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10 14L21 3"
          stroke="#1A202C"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
}

function Results() {
  return (
    <div className="h-screen">
      <NavBar></NavBar>
      <Preferences></Preferences>
      {/*todo: make this scrollable*/}
      <div className="flex flex-col items-center">
        <div>
          <div className="mt-4 p-4 max-w-lg">
            <h1 className="text-4xl font-semibold text-gray-900 dark:text-gray-100">
              🏆 Top picks 4 u
            </h1>
            <p className="mt-2 jtext-sm font-light text-gray-600">
              Here are our top 3 picks for you based on your preferences.
            </p>
            <div className="py-4 grid space-y-4">
              {results.map((result, id) => (
                <Result {...result} rank={id}></Result>
              ))}
            </div>
          </div>
          <div className="mt-4 p-4 max-w-lg">
            <h2 className="text-4xl font-semibold text-gray-900 dark:text-gray-100">
              You might also like
            </h2>
            <div className="py-4 grid space-y-4">
              {results.map((result, id) => (
                <Result {...result} rank={id}></Result>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Results;
