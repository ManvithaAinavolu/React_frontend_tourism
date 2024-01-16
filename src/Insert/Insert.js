import React, { useState } from 'react';
import axios from "axios";

function Insert() {
    const InsertForm = () => {
        const [formData, setFormData] = useState({
            username: "",
            password: "",
        });

        const handleChange = (e) => {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value,
            });
        };

        const handleSubmit = async (e) => {
            e.preventDefault();

            try {
                const response = await axios.post("http://localhost:4000/insert", formData);
                console.log("Insert Response:", response.data);
            } catch (error) {
                console.error("Insert Error:", error);
            }
        };

        return (
            <>
                <form onSubmit={handleSubmit}>
                    <label>
                        username
                        <input type="text" name="username" value={formData.username} onChange={handleChange} />
                    </label>

                    <label>
                        password
                        <input type="password" name="password" value={formData.password} onChange={handleChange} />
                    </label>

                    <button type="submit">Insert Data</button>
                </form>
            </>
        );
    }

    return <InsertForm />;
}

export default Insert;
