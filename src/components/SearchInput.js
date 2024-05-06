function SearchInput ({ onChange }) {

    const onHandleChange = (e) => {
        const { value } = e.target
        onChange(value)
    }

    return (
        <div>
            <input type="text" onChange={onHandleChange} />
            <button onClick={() => {}}>ToggleTheme</button>
        </div>
    )

}

export default SearchInput