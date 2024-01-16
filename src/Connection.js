import React from "react";
import axios from "axios";

const Conn = (props) => {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        axios('http://localhost:4000/')
            .then(response => {
                console.log('API Response:', response);

                if (response.status === 200 && Array.isArray(response.data)) {
                    console.log('Data Rows:', response.data);
                    setData(response.data);
                } else {
                    console.error('Invalid API response structure:', response.data);
                    
                }
            })
            .catch(err => {
                console.error('API Error:', err);
                
            });
    }, [setData]);

    return (
        <div>
            Login component Connection
            {
                data.length > 0 ?
                data.map((row, index) => (
                    <div key={index}>
                        {
                            row.map((item, innerIndex) => (
                                <span key={innerIndex}>{item}</span>
                            ))
                        }
                    </div>
                )) :
                "No data available"
            }
        </div>
    );
};

export default Conn;
