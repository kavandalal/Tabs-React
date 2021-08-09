import './App.css';
import React, { useState, useEffect } from 'react';
import { BsArrowReturnRight } from 'react-icons/bs';
import ReactLoading from 'react-loading';
const url = 'https://course-api.com/react-tabs-project';

function App() {
	const [loading, setLoading] = useState(true);
	const [jobs, setJobs] = useState([]);
	const [value, setValue] = useState(0);
	const getPeople = async () => {
		const res = await fetch(url);
		const newJobs = await res.json();
		setJobs(newJobs);
		setLoading(false);
	};
	useEffect(() => {
		getPeople();
	}, []);
	if (loading) {
		return <>Loading</>;
	}
	const { title, dates, duties, company } = jobs[value];
	return (
		<section class='page'>
			<div className='top'>
				<h1>Experience</h1>
				<div className='line'></div>
			</div>
			<div className='main'>
				<section className='btn'>
					{jobs.map((job, index) => {
						return (
							<button
								key={job.id}
								onClick={() => {
									setValue(index);
								}}
								className={`job-btn ${index === value && 'active'}`}>
								{job.company}
							</button>
						);
					})}
				</section>
				<section className='desc'>
					<h3>{title}</h3>
					<h4>{company}</h4>
					<h5>{dates}</h5>
					<article>
						{duties.map((duty, index) => {
							return (
								<div className='para' key={index}>
									<BsArrowReturnRight />
									<p>{duty}</p>
								</div>
							);
						})}
					</article>
				</section>
			</div>
		</section>
	);
}

export default App;
