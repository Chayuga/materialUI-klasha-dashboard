import { useStateContext } from '../../contexts/ContextProvider';

function ToggleSwitch() {
  const { toggleOn, setToggleOn } = useStateContext();

  return (
    <div className='relative flex flex-col items-center justify-center '>
      <div className='flex'>
        <label class='inline-flex relative items-center mr-2 cursor-pointer'>
          <input
            type='checkbox'
            className='sr-only peer'
            checked={toggleOn}
            readOnly
          />
          <div
            onClick={() => {
              setToggleOn((toggleOn) => !toggleOn);
            }}
            className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#EF2C5A]"
          ></div>
        </label>
        <p>{toggleOn ? 'Live' : 'Offline'}</p>
      </div>
    </div>
  );
}

export default ToggleSwitch;
