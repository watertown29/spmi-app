import React from 'react'
import SearchBar from '../components/PrimarySearchAppBar';
import Card from '../components/SimpleCard';

export default function Content() {
    return (
        <>
            <SearchBar/>
            <section className="card-section">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </section>
            <div className="content-bg">
                
            </div>
        </>
    )
}
