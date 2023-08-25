import React, { useState } from 'react';
import axios from 'axios';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper';

const PostForm = () => {

    const [address, setAddress] = useState('');
    const [notes, setNotes] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    const handleSelect = async (selectedAddress) => {

        try {
            const results = await geocodeByAddress(selectedAddress);
            const { formatted_address } = results[0];
            setAddress(formatted_address);

            const latLng = await getLatLng(results[0]);
            setLatitude(latLng.lat);
            setLongitude(latLng.lng);
        } catch (error) {
        console.error('Error fetching place details', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form submitted with the following data:');
        console.log('Address:', address);
        console.log('Latitude:', latitude);
        console.log('Longitude:', longitude);

        const post = {
            address: address,
            notes: notes,
            latitude: latitude,
            longitude: longitude
        }

        await
            axios
                .post('http://localhost:1234/newPost', post)
                .then((res) => {
                    console.log(res.data)
                    setAddress('')
                    setNotes('')
                    setLatitude('')
                    setLongitude('')
                    //  insert a navigate function to go to the home page to see the rendered card on the userLanding
                })
                .catch(err => console.log('error in axios post', err))
    };

    return (
        <Grid container spacing={3}>
        <Grid item xs={12}>
            <Typography variant="h2">Place Form</Typography>
            <Paper elevation={3} style={{ padding: '20px' }}>
            <form onSubmit={handleSubmit}>
                <PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleSelect} libraries={["places"]}>
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div>
                    <TextField
                        {...getInputProps({ placeholder: 'Search for a place...' })}
                        variant="outlined"
                        fullWidth
                    />
                    <div>
                        {loading ? <div>Loading...</div> : null}
                        {suggestions.map(suggestion => (
                        <div key={suggestion.description} {...getSuggestionItemProps(suggestion)}>
                            {suggestion.description}
                        </div>
                        ))}
                    </div>
                    </div>
                )}
                </PlacesAutocomplete>
                <div>
                <Typography variant="subtitle1">Address: {address}</Typography>
                </div>
                <div>
                <Typography variant="subtitle1">Notes:</Typography>
                <textarea
                    value={notes}
                    onChange={e => setNotes(e.target.value)}
                    style={{ width: '100%', height: '100px' }}
                />
                </div>
                <Button type="submit" variant="contained" color="primary">
                Submit
                </Button>
            </form>
            </Paper>
        </Grid>
        </Grid>
    );
};

export default PostForm;

