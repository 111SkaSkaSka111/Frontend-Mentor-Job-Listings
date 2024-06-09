import { useEffect, useState } from "react";
import "./App.css";
import Filter from "./Filter";
import Card from "./Card";

function App() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then((response) => response.json())
            .then((data) => setPosts(data))
            .catch((error) => console.error(error));
    }, []);

    const handleSearch = (category) => {
        if (!filter.includes(category)) {
            setFilter([...filter, category]);
        }
    };

    const handleRemoveFilter = (index) => {
        setFilter(filter.filter((_, i) => i !== index));
    };

    const handleClearFilter = () => {
        setFilter([]);
    };

    const filteredPosts = posts.filter((post) => {
        const categories = [post.role, post.level, ...post.languages, ...post.tools];
        return filter.every((category) => categories.includes(category));
    });

    return (
        <>
            <section>
                <header className="app-header">{filter.length > 0 && <Filter filter={filter} handleRemoveFilter={handleRemoveFilter} handleClearFilter={handleClearFilter} />}</header>
                <main className="app">
                    <Card apiData={filteredPosts} onClickItem={handleSearch} />
                </main>
            </section>
        </>
    );
}

export default App;
