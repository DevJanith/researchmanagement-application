import {
    Card, Container, Stack, Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Page from '../../components/Page';
import { ItemCreateForm } from './Form';


const ContentStyle = styled('div')(({ theme }) => ({ 
    margin: '5vh 0',
    display: 'flex', 
    flexDirection: 'column', 
}));


export default function ItemCreate() {

    return (
        <Page title="Item">
            <Container>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom>
                        Item
                    </Typography>
                </Stack> 
                <Card> 
                    <Container maxWidth="md">
                        <ContentStyle>
                            <Typography variant="h4" gutterBottom>
                                Create Item
                            </Typography>

                            <Typography sx={{ color: 'text.secondary', mb: 5 }}>Enter Item details below.</Typography>

                            <ItemCreateForm />
                        </ContentStyle>
                    </Container>
                </Card>
            </Container>
        </Page>
    );
}
