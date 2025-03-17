
export function App() {

  return <div className="w-2/3 mx-auto">
    <section className="mb-12">
      <div className="text-white mb-0.5">
        Your balance
      </div>
      <div className="flex items-center gap-2 mb-3.5">
        <div className="shadow-2xl bg-yellow-400 rounded-full w-6 h-6 flex items-center justify-center">
          <span className="italic font-bold text-red-400">V</span>
        </div>
        <div className="text-2xl font-bold text-white">
          $1.000.000
        </div>
      </div>
      <button className="bg-blue-500 text-white w-full py-2 rounded-md flex items-center justify-center gap-2 font-md">
        <span>+</span>
        <span>Buy credits</span>
      </button>
    </section>

    <section>
      <div className="flex justify-between items-center mb-2.5">
        <div className="font-semibold text-white">Payment cards</div>
        <button className="font-semibold text-blue-500">
        <span>+ </span>
        <span >Add card</span>
      </button>
      </div>

       <div className="flex items-center gap-3 pb-2">
          <img src="/visa.png" alt="" width={60} className="rounded-md overflow-hidden shrink-0" />
          <div className="flex justify-between items-center w-full">
            <div className="flex ">
              <div className="flex items-center gap-2 font-medium text-white">
                Vasya Pupkin{' '}
                <div className="rounded-lg text-blue-500 bg-blue-100 px-1.5 py-[0.02rem] text-[0.5rem]">Primary</div>
                <div className="opacity-50 text-xs mt-0.5">**** 1234</div>
                <button>→</button>
              </div>
              
            </div>
          </div>
        </div> 
       <div className="flex items-center gap-3 pb-2">
          <img src="/mastercard.png" alt="" width={60} className="rounded-md overflow-hidden shrink-0" />
          <div className="flex justify-between items-center w-full">
            <div className="flex ">
              <div className="flex flex-col items-center gap-2 font-medium text-white">
                Tinofey Pilulkin{' '}
                <div className="opacity-50 text-xs mt-0.5">**** 1234</div>
                
              </div>
              <button>→</button>
            </div>
          </div>
        </div> 
 


      <div className="bg-green-200/15 rounded-lg py-2 px-3 text-sm text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel quo vitae quas reprehenderit, veniam placeat!</div>
    </section>
  </div>

}

export default App
