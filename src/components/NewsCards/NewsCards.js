import React from 'react';
import { Grid, Grow, Typography } from '@material-ui/core';

import NewsCard from '../NewsCard/NewsCard'

const NewsCards = ({ articles }) => {
    return (
        <Grow in>
            <Grid container alignItems="stretch" spacing={3}>

            {articles.map((article, i) => (
                <NewsCard />
            ))}

            </Grid>
        </Grow>
    );
}

export default NewsCards;