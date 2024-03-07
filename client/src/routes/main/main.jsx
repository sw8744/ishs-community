import React, { useEffect, useState } from 'react';

import NavBar from '../../component/page/NavBar';
import Footer from '../../component/page/Footer';
import './index.css';

function Main() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    (async () => {
      const formData = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        credentials: 'include',
      };
      const res = await (await fetch(`/check_session`, formData)).json();
      console.log(res);
      if (res.status === 200) {
        setIsLogin(true);
      }
    })();
  }, []);
  return (
    <div className='flex flex-col'>
      <NavBar isLogin={isLogin} />
      <div className='py-6 flex justify-center 2xl:px-44 xl:px-32 lg:px-8 px-4 h-full'>
        <div className='flex flex-col flex-1 gap-7 max-w-[110rem]'>
          <div className='basis-[26rem] flex-1 bg-slate-600'>블럭1</div>
          <div className='basis-80 flex-1 bg-green-500'>블럭2</div>
          <div className=' bg-yellow-500 basis-36 '>블럭3</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Main;
