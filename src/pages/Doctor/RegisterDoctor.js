import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@material-ui/core/styles';
import { Box, Card, Link, Container, Typography } from '@material-ui/core';
// layouts
import AuthLayout from '../../Components/authentication_doctor/AuthLayout';
// components
import Page from '../../Components/Page';
import { MHidden } from '../../Components/@material-extend';
import { RegisterFormDoctor } from '../../Components/authentication_doctor/register';
import AuthSocial from '../../Components/authentication_doctor/AuthSocials';
import Alert from '../../Components/Alert';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex'
  }
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 464,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(2, 0, 2, 2)
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(12, 0)
}));

// ----------------------------------------------------------------------

export default function RegisterDoctor() {
  return (
    <RootStyle title="Doctor Register | Qognition">
      <AuthLayout>
        Already have an account?  &nbsp;
        <Link underline="none" variant="subtitle2" component={RouterLink} to="/logindoctor">
          Login
        </Link>
      </AuthLayout>

      <MHidden width="mdDown">
        <SectionStyle>
          <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
            Manage your consultation with patients more effectively.
          </Typography>
          <img alt="register" src="/illustration/illustration_register.png" />
        </SectionStyle>
      </MHidden>

      <Container>
        <ContentStyle>
          <Box sx={{ mb: 5 }}>
          <Alert/>
            <Typography variant="h4" gutterBottom>
              Get started now.
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
            Qognition for Doctors.
            </Typography>
          </Box>

          <AuthSocial />

          <RegisterFormDoctor />

          <Typography variant="body2" align="center" sx={{ color: 'text.secondary', mt: 3 }}>
            By registering, I agree to Qognition&nbsp;
            <Link underline="always" sx={{ color: 'text.primary' }}>
              Terms of Service
            </Link>
            &nbsp;and&nbsp;
            <Link underline="always" sx={{ color: 'text.primary' }}>
              Privacy Policy
            </Link>
            .
          </Typography>

          <MHidden width="smUp">
            <Typography variant="subtitle2" sx={{ mt: 3, textAlign: 'center' }}>
              Already have an account?&nbsp;
              <Link to="/logindoctor" component={RouterLink}>
                Login
              </Link>
            </Typography>
          </MHidden>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
