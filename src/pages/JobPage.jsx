import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const JobPage = () => {
    const { id } = useParams();
    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJob = async () => {
            try {
                const response = await fetch(`http://localhost:8000/jobs/${id}`);
                const data = await response.json();
                setJob(data);
            } catch (error) {
                console.error("Error fetching job data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchJob();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!job) {
        return <div>Job not found</div>;
    }

    return (
        <div>
            <h1>{job.title}</h1>
            {/* Other job details */}
        </div>
    );
};

export default JobPage;