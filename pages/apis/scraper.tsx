// ScraperApiPage.tsx

import React, { useEffect, useState } from 'react';
import { CircularProgress, Alert, Container, Grid } from '@mui/material';
import ApiFieldsList from '@/content/Management/ApiFields/ApiFieldsList';
import SidebarLayout from '@/layouts/SidebarLayout';
import PageHeader from '@/content/Management/Transactions/PageHeader';
import apiFieldsData from '@/content/Management/ApiFields/apiFieldsData.json'; // Adjust the path
import Head from 'next/head';
import PageTitleWrapper from '@/components/PageTitleWrapper';
import { title } from 'process';

const ScraperApiPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    // Simulate API call delay
    setTimeout(() => {
      setData(apiFieldsData);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error.message}</Alert>;

  return (
    <>
    <Head>
        <title>API Calls</title>
      </Head>
      <PageTitleWrapper>
        <PageHeader
        title="API Calls"
        description="These are all the APIs linked to your Project"
        />
      </PageTitleWrapper>
    <Container maxWidth="lg">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={3}
      >
        <Grid item xs={12}>
          <ApiFieldsList apiFields={data} />
        </Grid>
      </Grid>
    </Container>
    </>
  );
};

ScraperApiPage.getLayout = (page) => (
  <SidebarLayout>{page}</SidebarLayout>
);

export default ScraperApiPage;
