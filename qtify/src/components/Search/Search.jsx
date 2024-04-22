import React from "react";
import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/Search-icon.svg";
import useAutocomplete from "@mui/base/useAutocomplete";
import { styled } from "@mui/system";
import { truncate } from "../../helpers/helpers";
// import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";
// import zIndex from "@mui/material/styles/zIndex";
// const Listbox = styled("ul")({ theme })=>({
//     width:"100%",
//     margin:0,
//     padding:0,
//     position:"absolute",
//     borderRadius:"0px 0px 10px 10 px",
//     border:"1px solid var (--color-primary)",
//     top:60,
//     height:"max-content",
//     maxHeight:"500px",
//     zIndex:10,
//     overflowY:"scroll",
//     left:0,
// });
// const Search = ({ searchData, placeholder }) => {
//   const {
//     getRootProps,
//     getInputLabelProps,
//     value,
//     getInputProps,
//     getListboxProps,
//     getOptionProps,
//     groupedOptions,
//   } = useAutocomplete({
//     id: "use-autocomplete-demo",
//     options: searchData || [],
//     getOptionLabel: (option) => option.title,
//   });

function Search({ searchData, placeholder }) {
  // const navigate = useNavigate();
  const onSubmit = (e, value) => {
    e.preventDefault();
    console.log(value);
    // navigate(`/album/${value.slug}`);
  };
  return (
    <div style={{ position: "relative" }}>
      <form
        className={styles.wrapper}
        onSubmit={(e) => {
          // onSubmit(e, value);
        }}
      >
        <div>
          {/* {...getRootProps()} */}
          <input
            name="album"
            className={styles.search}
            placeholder={placeholder}
            required
          />
          {/* {...getInputProps()} */}
        </div>

        <div>
          <button className={styles.searchButton} type="submit">
            <SearchIcon />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Search;
