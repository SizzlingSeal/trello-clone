import React, {createContext, useState, useEffect} from 'react';

export const Time = createContext();

const TimeContextProvider = (props) => {
    const [time, setTime] = useState('');

    useEffect(() => {
        const interval = setInterval(
          () => {
            var date = new Date();
            var h = date.getHours(); 
            var m = date.getMinutes();
            var s = date.getSeconds();
            var session = "AM";
            var options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
            let today = new Date().toLocaleDateString("en-US", options);
            if(h == 0){
                h = 12;
                }
            
                if(h > 12){
                h = h - 12;
                session = "PM";
                }
                h = (h < 10) ? "0" + h : h;
            m = (m < 10) ? "0" + m : m;
            s = (s < 10) ? "0" + s : s;
            var time = today + " " + h + ":" + m + ":" + s + " " + session;
            setTime(time);
          }
          ,
          1000
        );
     
        return () => {
          clearInterval(interval);
        }
      }, []);
    return ( 
        <Time.Provider value={{time}}>
            {props.children}
        </Time.Provider>
     );
}
 
export default TimeContextProvider;