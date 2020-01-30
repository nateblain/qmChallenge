import React, { useState, useEffect, ChangeEvent } from 'react';

const Highlighter = () => {
  const [searchText, setSearchText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [checkboxState, setCheckboxState] = useState(false);

  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  }, [count]);

  const handleSearchTermChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    handleHighlighting(event.target.value);
  }

  useEffect(() => {
    handleHighlighting(searchTerm);
  }, [searchText, searchTerm, checkboxState]);

  const handleTextSearch = (event: ChangeEvent<HTMLTextAreaElement>) =>
    setSearchText(event.target.value);

  const handleHighlighting = (value: string) => {
    const firstReplace = searchText.replace(/<mark>/g, "");
    const secondReplace = firstReplace.replace(/<\/mark>/g, "");
    let newSearchText = secondReplace;
    if (value) {
      if (checkboxState) {
        const ciValue = new RegExp(value, "gi");
        const markLC = newSearchText.replace(ciValue, function replace(match) {
          return '<mark>' + match + '</mark>';
        });
        setSearchText(markLC);
      } else {
        const ciValue = new RegExp(value, "g");
        const markLC = newSearchText.replace(ciValue, `<mark>${value}</mark>`);
        setSearchText(markLC);
      }
    } else {
      setSearchText(newSearchText);
    }
  }

  const handleCheckboxChange = () =>
    setCheckboxState(!checkboxState);

  return (
    <section className="container">
      <textarea className="text-area" onChange={handleTextSearch}/>
      <input className="search-term" type="text" onChange={handleSearchTermChange}/>
      <section className="checkbox-container">
        case-sensitive?
        <input className="checkbox" type="checkbox" defaultChecked={checkboxState} onChange={handleCheckboxChange}/>
      </section>
      <section dangerouslySetInnerHTML={{__html: searchText}} />
      <div>This is counting: {count}</div>
    </section>
  )
}

export default Highlighter;
