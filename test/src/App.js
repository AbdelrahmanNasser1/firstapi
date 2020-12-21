import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
	const [employees, setEmployees] = useState([]);

	useEffect(() => {
		fetch('http://localhost:8000/api/employee/', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then((res) => setEmployees(res))
			.catch((err) => console.log(err));
	}, []);

	function deleteItem(employeeid) {
		fetch('http://localhost:8000/api/employee/' + employeeid, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then((res) => setEmployees(res))
			.catch((err) => console.log(err));
	}

	return (
		<div className="App">
			<h1>Employees</h1>
			<table>
				<tr>
					<th>Firstname</th>
					<th>Lastname</th>
					<th>Age</th>
				</tr>
				{employees.map((employee) => {
					return (
						<tr>
							<td>{employee.firstname}</td>
							<td>{employee.secondname}</td>
							<td>{employee.age}</td>
							<td className="row__button">
								<button onClick={() => deleteItem(employee.id)}>Delete</button>
							</td>
						</tr>
					);
				})}
			</table>
		</div>
	);
}

export default App;
