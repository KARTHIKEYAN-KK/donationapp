import { Pressable, TextInput } from 'react-native';
import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { scaleFontSize } from '../../assets/styles/scaling';
import PropTypes from 'prop-types';
import style from './style';

const Search = (props) => {
    const [search, setSearch] = useState('');
    const textInputref = useRef(null);

    const handleSearch = (value) => {
        setSearch(value);
        props.onSearch(value);
    };

    const handleFocus = () => {
        textInputref.current.focus();
    };

    return (
        <Pressable style={style.searchInputContainer} onPress={() =>  handleFocus()}>
            <FontAwesomeIcon icon={faSearch} color={'#25C0FF'} size={scaleFontSize(20)} />
            <TextInput
                style={style.searchInput}
                placeholder="Search"
                ref={textInputref}
                value={search}
                onChangeText={(value) => handleSearch(value)}
            />
        </Pressable>
    );
};

Search.propTypes = {
    onPress: PropTypes.func,
};

export default Search;
