import React, { useState } from 'react';

export default function MyCreate() {
    const [name, setName] = useState("");
    const [pass, setPass] = useState("");
    const [newPass, setNewPass] = useState(false);
    const [gender, setGender] = useState("");

    const getFormData = (e) => {
        e.preventDefault();
        console.log({ name, pass, newPass, gender });
        // You can handle form submission here (e.g., API call)
    };

    return (
        <div>
            <form onSubmit={getFormData}>
                <label>
                    Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Pass:
                    <input
                        type="password"
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Conf Pass:
                    <input
                        type="checkbox"
                        checked={newPass}
                        onChange={(e) => setNewPass(e.target.checked)}
                    />
                </label>
                <br />
                <label>
                    Male:
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={gender === "male"}
                        onChange={(e) => setGender(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Female:
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={gender === "female"}
                        onChange={(e) => setGender(e.target.value)}
                    />
                </label>
                <br />
                <input type="submit" />
            </form>
        </div>
    );
}
