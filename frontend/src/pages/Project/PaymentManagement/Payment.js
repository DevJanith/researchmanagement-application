import {
    Card, Container, Stack, Typography
} from '@mui/material';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import Page from '../../../components/Page';
import { PaymentCardForm, PaymentPhoneForm } from "./Form";


const ContentStyle = styled('div')(({ theme }) => ({
    margin: '5vh 0',
    display: 'flex',
    flexDirection: 'column',
}));


export default function Payment() {

    const [value, setValue] = React.useState('phone');
    const [error, setError] = React.useState(false);
    const [helperText, setHelperText] = React.useState('Choose wisely');

    const handleRadioChange = (event) => {
        setValue(event.target.value);

        setHelperText(' ');
        setError(false);
    };

    return (
        <Page title="payment">
            <Container>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom>
                        Payment
                    </Typography>
                </Stack>
                {/* <Card>
                    <Container maxWidth="md">
                        <ContentStyle>
                            <Typography sx={{ color: 'text.secondary', mb: 5 }}>Select a Payment Method .</Typography>
                        </ContentStyle>
                    </Container>
                </Card> */}
                <Card>
                    <Container maxWidth="md">
                        <ContentStyle>
                            <form style={{ marginBottom: "20px" }}>
                                <FormControl sx={{ m: 1 }} error={error} variant="standard">
                                    <RadioGroup
                                        aria-labelledby="demo-error-radios"
                                        name="quiz"
                                        value={value}
                                        onChange={handleRadioChange}
                                    >
                                        <div style={{ display: 'flex' }}>
                                            <FormControlLabel value="card" control={<Radio />} label="Card Payment" />
                                            <FormControlLabel value="phone" control={<Radio />} label="Phone Payment" />
                                        </div>
                                    </RadioGroup>
                                </FormControl>
                            </form>
                            <Typography sx={{ color: 'text.secondary', mb: 5 }}>Enter Payment details below.</Typography>
                            {value == "card" ? <PaymentCardForm /> : <PaymentPhoneForm />}
                        </ContentStyle>
                    </Container>
                </Card>
            </Container>
        </Page>
    );
}
