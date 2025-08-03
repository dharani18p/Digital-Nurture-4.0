// src/Getuser.js
import React, { Component } from 'react';

class Getuser extends Component {
    constructor() {
        super();
        this.state = {
            user: null,
            loading: true,
        };
    }

    async componentDidMount() {
        try {
            const response = await fetch('https://api.randomuser.me/');
            const data = await response.json();
            this.setState({
                user: data.results[0],
                loading: false,
            });
        } catch (error) {
            console.error('Error fetching user:', error);
        }
    }

    render() {
        const { user, loading } = this.state;

        if (loading) {
            return <p>Loading user data...</p>;
        }

        return (
            <div style={{ textAlign: 'center', padding: '20px' }}>
                <h2>User Details</h2>
                <img src={user.picture.large} alt="User" />
                <h3>{`${user.name.title} ${user.name.first}`}</h3>
            </div>
        );
    }
}

export default Getuser;
