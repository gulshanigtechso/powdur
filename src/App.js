import { useEffect, useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import { FiArrowLeft } from "react-icons/fi";
import { countryData } from "./data/countryData";

const images = [
  "https://js.stripe.com/v3/fingerprinted/img/discover-ac52cd46f89fa40a29a0bfb954e33173.svg",
  "https://js.stripe.com/v3/fingerprinted/img/jcb-271fd06e6e7a2c52692ffa91a95fb64f.svg",
  "https://js.stripe.com/v3/fingerprinted/img/diners-fbcbd3360f8e3f629cdaa80e93abdb8b.svg",
  "https://js.stripe.com/v3/fingerprinted/img/unionpay-8a10aefc7295216c338ba4e1224627a1.svg",
];

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [count, setCount] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex === images.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 2500);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  // decrement
  const decrement = () => {
    if (count <= 1) {
      setCount(1);
    } else {
      setCount((prevState) => prevState - 1);
    }
  };

  // increment
  const increment = () => {
    if (count >= 10) {
      setCount(10);
    } else {
      setCount((prevState) => prevState + 1);
    }
  };

  return (
    <main>
      <div className="container mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="left_col">
            <div className="container mx-auto pt-10 px-4 md:px-20 md:py-12">
              <div className="flex gap-3">
                <div>
                  <a href="/" className="flex items-center gap-2">
                    <FiArrowLeft className="text-lg text-gray-400" />
                    <img
                      src="https://d1wqzb5bdbcre6.cloudfront.net/63f4ec8cbe3d41be42a10161d3a86d3a3bda2d541052dc077e4d5e164c3386e1/68747470733a2f2f66696c65732e7374726970652e636f6d2f66696c65732f4d44423859574e6a64463878534559775a317044536c4978626d7470597a4a5866475a666447567a6446394263456c304f453952576e5a7652454a555330566f4d47564d62464e34546b38303063713345486f6c71"
                      alt=""
                      className="w-7"
                    />
                    <span className="text-sm font-semibold">Powdur</span>
                  </a>
                </div>
                <div>
                  <span className="bg-amber-300 text-red-700 text-xs font-semibold rounded px-1 py-0.5">
                    TEST MODE
                  </span>
                </div>
              </div>

              <div className="mt-10 mb-12">
                <h5 className="text-slate-500 font-semibold">Pay Powdur</h5>
                <h2 className="text-4xl font-semibold">$129.00</h2>
              </div>

              <ul className="grid gap-6">
                <li className="flex justify-between">
                  <div className="flex gap-5">
                    <div className="w-12 rounded overflow-hidden">
                      <img
                        src="https://d1wqzb5bdbcre6.cloudfront.net/c25a949b6f1ffabee9af1a5696d7f152325bdce2d1b926456d42994c3d91ad78/68747470733a2f2f66696c65732e7374726970652e636f6d2f6c696e6b732f666c5f746573745f67625631776635726a4c64725a635858647032346d643649"
                        alt=""
                      />
                    </div>
                    <div>
                      <h6 className="text-sm font-semibold">The Pure Set</h6>
                      <div
                        className="bg-gray-100 rounded text-sm px-1.5 py-0.5 cursor-pointer inline-flex gap-1 items-center"
                        onClick={() => setIsModalOpen(true)}
                      >
                        <span className="text-xs">Qty {count}</span>
                        <HiChevronDown />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h6 className="text-sm font-semibold">$65.00</h6>
                  </div>
                </li>

                <li className="flex justify-between">
                  <div className="flex gap-5">
                    <div className="w-12 rounded overflow-hidden">
                      <img
                        src="https://d1wqzb5bdbcre6.cloudfront.net/d4d32b3216cdb09a5749e32214a8f37dbe0785affd4234c80471cebd74e8c076/68747470733a2f2f66696c65732e7374726970652e636f6d2f6c696e6b732f4d44423859574e6a64463878534559775a317044536c4978626d7470597a4a5866475a735833526c63335266596b746c4e6d5a3565564e71526d777a526e6856656e49785a455645534570543030334a377239327551"
                        alt=""
                      />
                    </div>
                    <div>
                      <h6 className="text-sm font-semibold">Pure glow cream</h6>
                      <div
                        className="bg-gray-100 rounded text-sm px-1.5 py-0.5 cursor-pointer inline-flex gap-1 items-center"
                        onClick={() => setIsModalOpen(true)}
                      >
                        <span className="text-xs">Qty {count}</span>
                        <HiChevronDown />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h6 className="text-right text-sm font-semibold">$64.00</h6>
                    <p className="text-xs text-slate-400">$32.00 each</p>
                  </div>
                </li>
              </ul>

              {/* <div className="absolute bottom-0">
                <p className="text-sm text-gray-400">
                  Powered by <b>stripe</b> &nbsp; | &nbsp;&nbsp;
                  <a
                    href="/"
                    className="border-dotted border-b-2 border-gray-300 hover:text-gray-500"
                  >
                    Terms
                  </a>
                  &nbsp; &nbsp;&nbsp;
                  <a
                    href="/"
                    className="border-dotted border-b-2 border-gray-300 hover:text-gray-500"
                  >
                    Privacy
                  </a>
                </p>
              </div> */}
            </div>
          </div>

          <div className="right_col">
            <div className="container mx-auto pb-16 px-4 md:px-20 md:py-12">
              <div>
                <button className="bg-black text-white w-full text-lg font-semibold rounded-md">
                  <img
                    src="https://js.stripe.com/v3/fingerprinted/img/applePay-1a20e6d1f687dfd34571382ce7c4c23e.svg"
                    alt=""
                    className="mx-auto"
                  />
                </button>
              </div>

              <div class="flex items-center my-6">
                <div class="flex-grow h-px bg-gray-300"></div>
                <span class="text-sm flex-shrink text-gray-500 px-2 font-light">
                  Or pay with card
                </span>
                <div class="flex-grow h-px bg-gray-300"></div>
              </div>

              <form action="" className="grid gap-4">
                <div>
                  <label htmlFor="" className="text-xs">
                    Email
                  </label>
                  <input
                    type="text"
                    className="text-sm shadow w-full rounded-md px-3 py-2 mt-0.5"
                  />
                </div>

                <div>
                  <label htmlFor="" className="text-xs">
                    Card information
                  </label>
                  <div>
                    <div className="rounded-t-md shadow relative">
                      <input
                        type="text"
                        placeholder="1234 1234 1234 1234"
                        className="text-sm w-full rounded-t-md px-3 py-2 mt-0.5"
                      />
                      <div className="flex gap-1 absolute top-1/2 right-3 -translate-y-1/2">
                        <img
                          src="https://js.stripe.com/v3/fingerprinted/img/visa-729c05c240c4bdb47b03ac81d9945bfe.svg"
                          alt=""
                        />
                        <img
                          src="https://js.stripe.com/v3/fingerprinted/img/mastercard-4d8844094130711885b5e41b28c9848f.svg"
                          alt=""
                        />
                        <img
                          src="https://js.stripe.com/v3/fingerprinted/img/amex-a49b82f46c5cd6a96a6e418a6ca1717c.svg"
                          alt=""
                        />
                        <img src={images[currentIndex]} alt="" />
                      </div>
                    </div>

                    <input
                      type="text"
                      placeholder="MM / YY"
                      className="text-sm shadow w-1/2 px-3 py-2 mt-0.5 rounded-bl-md"
                    />

                    <div className="w-1/2 rounded-t-md shadow relative inline-block">
                      <input
                        type="text"
                        placeholder="CVC"
                        className="text-sm shadow w-full px-3 py-2 mt-0.5 rounded-br-md border-l-2"
                      />
                      <div className="flex gap-1 absolute top-1/2 right-3 -translate-y-1/2">
                        <svg
                          focusable="false"
                          viewBox="0 0 32 21"
                          role="img"
                          aria-label="CVC"
                          height="16px"
                        >
                          <title>CVC</title>
                          <g fill="none" fill-rule="evenodd">
                            <g fill="#333">
                              <g transform="translate(0 2)">
                                <path
                                  d="M21.68 0H2c-.92 0-2 1.06-2 2v15c0 .94 1.08 2 2 2h25c.92 0 2-1.06 2-2V9.47a5.98 5.98 0 0 1-3 1.45V11c0 .66-.36 1-1 1H3c-.64 0-1-.34-1-1v-1c0-.66.36-1 1-1h17.53a5.98 5.98 0 0 1 1.15-9z"
                                  opacity=".2"
                                ></path>
                                <path
                                  d="M19.34 3H0v3h19.08a6.04 6.04 0 0 1 .26-3z"
                                  opacity=".3"
                                ></path>
                              </g>
                              <g transform="translate(18)">
                                <path d="M7 14A7 7 0 1 1 7 0a7 7 0 0 1 0 14zM4.22 4.1h-.79l-1.93.98v1l1.53-.8V9.9h1.2V4.1zm2.3.8c.57 0 .97.32.97.78 0 .5-.47.85-1.15.85h-.3v.85h.36c.72 0 1.21.36 1.21.88 0 .5-.48.84-1.16.84-.5 0-1-.16-1.52-.47v1c.56.24 1.12.37 1.67.37 1.31 0 2.21-.67 2.21-1.64 0-.68-.42-1.23-1.12-1.45.6-.2.99-.73.99-1.33C8.68 4.64 7.85 4 6.65 4a4 4 0 0 0-1.57.34v.98c.48-.27.97-.42 1.44-.42zm4.32 2.18c.73 0 1.24.43 1.24.99 0 .59-.51 1-1.24 1-.44 0-.9-.14-1.37-.43v1.03c.49.22.99.33 1.48.33.26 0 .5-.04.73-.1.52-.85.82-1.83.82-2.88l-.02-.42a2.3 2.3 0 0 0-1.23-.32c-.18 0-.37.01-.57.04v-1.3h1.44a5.62 5.62 0 0 0-.46-.92H9.64v3.15c.4-.1.8-.17 1.2-.17z"></path>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="" className="text-xs">
                    Name on card
                  </label>
                  <input
                    type="text"
                    className="text-sm shadow w-full rounded-md px-2 py-2 mt-0.5"
                  />
                </div>

                <div>
                  <label htmlFor="" className="text-xs">
                    Country or region
                  </label>
                  <div>
                    <select className="text-sm shadow w-full rounded-t-md px-2 py-2 mt-0.5">
                      {countryData.map((item) => {
                        const { id, name } = item;
                        return (
                          <option key={id} value={name}>
                            {name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <input
                    type="text"
                    placeholder="ZIP"
                    className="text-sm shadow w-full rounded-b-md px-3 py-2 mt-0.5"
                  />
                </div>

                <div className="mt-7">
                  <button className="bg-blue-950 text-slate-400 font-bold text-center w-full py-2 rounded-md">
                    Pay
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="absolute bottom-2 left-14 md:bottom-10 md:left-20">
          <p className="text-sm text-gray-400">
            Powered by <b>stripe</b> &nbsp; | &nbsp;&nbsp;
            <a
              href="/"
              className="border-dotted border-b-2 border-gray-300 hover:text-gray-500"
            >
              Terms
            </a>
            &nbsp; &nbsp;&nbsp;
            <a
              href="/"
              className="border-dotted border-b-2 border-gray-300 hover:text-gray-500"
            >
              Privacy
            </a>
          </p>
        </div>
      </div>

      {isModalOpen ? (
        <div className="bg-black/[0.3] fixed top-0 left-0 z-10 w-full h-full">
          <div className="grid place-items-center h-full">
            <div className="bg-white max-w-xs md:max-w-sm w-full rounded-lg">
              <div className="p-5">
                <div className="flex justify-between items-center">
                  <div className="flex gap-4">
                    <div className="w-12 rounded overflow-hidden">
                      <img
                        src="https://d1wqzb5bdbcre6.cloudfront.net/c25a949b6f1ffabee9af1a5696d7f152325bdce2d1b926456d42994c3d91ad78/68747470733a2f2f66696c65732e7374726970652e636f6d2f6c696e6b732f666c5f746573745f67625631776635726a4c64725a635858647032346d643649"
                        alt=""
                      />
                    </div>
                    <div>
                      <h6 className="font-semibold">Update Quantity</h6>
                      <span className="text-xs text-gray-600">
                        The Pure Set
                      </span>
                    </div>
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={() => setIsModalOpen(false)}
                  >
                    &#10006;
                  </div>
                </div>
              </div>

              <div className="border-b-2 border-solid"></div>

              <div className="p-5">
                <div className="flex gap-5 justify-center items-center mb-8">
                  <button
                    className=" bg-gray-100 rounded-full w-7 h-7 grid place-items-center"
                    onClick={decrement}
                  >
                    <svg
                      focusable="false"
                      width="16px"
                      height="16px"
                      fill="#888"
                      viewBox="0 0 13 2"
                    >
                      <rect
                        y="0.75"
                        width="12"
                        height="1.5"
                        rx="0.75"
                        fill-opacity="0.9"
                      ></rect>
                    </svg>
                  </button>

                  <h2 className="text-2xl border px-10 py-1 rounded-md">
                    {count}
                  </h2>

                  <button
                    className=" bg-gray-100 rounded-full w-7 h-7 grid place-items-center"
                    onClick={increment}
                  >
                    <svg
                      focusable="false"
                      width="20px"
                      height="16px"
                      fill="#888"
                      viewBox="0 0 12 13"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.75 5.75H11.25C11.6642 5.75 12 6.08579 12 6.5C12 6.91421 11.6642 7.25 11.25 7.25H6.75V11.75C6.75 12.1642 6.41421 12.5 6 12.5C5.58579 12.5 5.25 12.1642 5.25 11.75V7.25H0.75C0.335786 7.25 0 6.91421 0 6.5C0 6.08579 0.335786 5.75 0.75 5.75H5.25V1.25C5.25 0.835786 5.58579 0.5 6 0.5C6.41421 0.5 6.75 0.835786 6.75 1.25V5.75Z"
                        fill-opacity="0.9"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div>
                  <button className="bg-blue-950 text-white w-full py-1.5 rounded-md">
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}

export default App;
