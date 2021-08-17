export default function MainFooter() {
  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4 border-t pt-5">
        <div className="sm:col-span-3">
          <a
            href="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center"
          >
            <svg className="w-10" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <circle className="cls-1" fill="#fff" cx="256.23" cy="256" r="256" />
              <path className="cls-2" fill="#fff24b" d="M256.59,119.24l-.73,0Z" />
              <path className="cls-3" fill="#a84291" d="M256.23,163.82v.11a27.36,27.36,0,0,0-17.93,6.77L236,173a27.51,27.51,0,0,0,20.34,45.94h-.07a37.81,37.81,0,1,1-37.81,37.8c0-.39,0-.77,0-1.16V171.82l0,0V58.66h0a27.54,27.54,0,0,0-45.65-20.29c-.79.76-1.57,1.53-2.35,2.3a27.46,27.46,0,0,0-7.11,18.47c0,.13,0,.26,0,.39h0V257h0a92.93,92.93,0,1,0,92.92-93.14Z" />
              <path className="cls-4" fill="#d92f8a" d="M256.23,54c-2.15,0-4.28,0-6.41.11v0a27.29,27.29,0,0,0-18,6.74c-.78.76-1.56,1.52-2.33,2.29a27.37,27.37,0,0,0,20.31,45.7c.34,0,.68,0,1,0l.73,0h.09c1.52,0,3-.09,4.58-.09a148.14,148.14,0,1,1-105.26,44,27.36,27.36,0,0,0-36.26-41c-.79.76-1.56,1.52-2.33,2.29l-.17.19c.31-.39.63-.77,1-1.14A202.11,202.11,0,0,0,53.44,256.74c0,112,90.79,202.79,202.79,202.79S459,368.74,459,256.74,368.22,54,256.23,54Z" />
            </svg>
            <span className="ml-1 text-xl font-bold tracking-wide text-gray-800">
              bonjek
            </span>
          </a>
          <div className="mt-3 lg:max-w-sm">
            <p className="text-sm text-gray-800">
              Ojek Online Bontang, Pesan makan dirumah aja BONJEK-in aja.
            </p>
          </div>
        </div>
        <div>
          <span className="text-base font-bold tracking-wide text-gray-900">
            Social Media
          </span>
          <p className="mb-2 text-sm text-gray-500">
            Tetap terhubung bersama kami melalui:
          </p>
          <div className="flex items-center mt-1 space-x-3">
            <a
              href="https://www.instagram.com/bonjek.id"
              className="text-gray-500 transition-colors duration-300 hover:text-pink-primary"
            >
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                <circle cx="15" cy="15" r="4" />
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/bon.jek.102"
              className="text-gray-500 transition-colors duration-300 hover:text-pink-primary"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="inline-block text-center w-full pt-5 pb-5 border-t lg:flex-row">
        <p className="text-sm text-gray-600">
          © Copyright 2021 bonjek Indonesia. All rights reserved.
        </p>
      </div>
    </div>
  )
}