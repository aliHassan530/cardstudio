import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Paper,
  Chip,
  Button,
  Divider,
  Snackbar,
  Alert,
} from "@mui/material";
import { } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import WifiOffIcon from "@mui/icons-material/WifiOff";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SecurityIcon from "@mui/icons-material/Security";
import ImageIcon from "@mui/icons-material/Image";
import DownloadIcon from "@mui/icons-material/Download";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import GavelIcon from "@mui/icons-material/Gavel";
import UpdateIcon from "@mui/icons-material/Update";
import LocationOffIcon from "@mui/icons-material/LocationOff";
import EmailIcon from "@mui/icons-material/Email";
import PrintIcon from "@mui/icons-material/Print";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

interface Section {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
  highlight?: boolean;
}

export default function TermsAndConditions() {
  const [agree, setAgree] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleExpandAll = () => {};

  const sections: Section[] = [
    {
      id: "section1",
      title: "Use of Application",
      icon: <PhoneAndroidIcon />,
      content: (
        <Box>
          <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 2 }}>
            CardStudio allows users to create, edit, and download custom
            card designs such as Birthday Cards, Marriage Cards, and others. You
            may import images, choose designs, and export your final card in PDF
            or image format.
          </Typography>
          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mt: 2 }}>
            <Chip
              label="Card Design"
              size="small"
              color="primary"
              variant="outlined"
            />
            <Chip
              label="PDF Export"
              size="small"
              color="primary"
              variant="outlined"
            />
            <Chip
              label="Image Import"
              size="small"
              color="primary"
              variant="outlined"
            />
          </Box>
        </Box>
      ),
    },
    {
      id: "section2",
      title: "Online & Offline Modes",
      icon: <WifiOffIcon />,
      content: (
        <Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: 3,
            }}
          >
            <Paper
              elevation={0}
              sx={{
                p: 2.5,
                backgroundColor: "#f0f4ff",
                borderRadius: 2,
                border: "1px solid #d0d9ff",
              }}
            >
              <Typography
                variant="h6"
                fontWeight="bold"
                color="primary"
                gutterBottom
              >
                Offline Mode
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
                Basic functionality is available without an internet connection.
                Create and edit cards locally on your device.
              </Typography>
            </Paper>
            <Paper
              elevation={0}
              sx={{
                p: 2.5,
                backgroundColor: "#fff4f0",
                borderRadius: 2,
                border: "1px solid #ffd9cc",
              }}
            >
              <Typography
                variant="h6"
                fontWeight="bold"
                color="secondary"
                gutterBottom
              >
                Online Mode
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
                Advanced features require an active internet connection and user
                authentication through Firebase.
              </Typography>
            </Paper>
          </Box>
        </Box>
      ),
    },
    {
      id: "section3",
      title: "User Accounts",
      icon: <AccountCircleIcon />,
      highlight: true,
      content: (
        <Box>
          <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 2 }}>
            If you choose to create an account, you agree to provide accurate
            information. Firebase Authentication is used to manage login,
            password reset, and account security.
          </Typography>
          <Box
            sx={{
              p: 2,
              backgroundColor: "#fff9e6",
              borderRadius: 2,
              borderLeft: "4px solid #ffc107",
              mb: 2,
            }}
          >
            <Typography
              variant="body2"
              fontWeight="bold"
              color="warning.dark"
              gutterBottom
            >
              Your Responsibility
            </Typography>
            <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
              You are responsible for keeping your login credentials
              confidential and secure.
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
            You may delete your account at any time. Deleting your account will
            permanently remove all associated user data stored within Firebase.
          </Typography>
        </Box>
      ),
    },
    {
      id: "section4",
      title: "Permissions",
      icon: <SecurityIcon />,
      content: (
        <Box>
          <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 2 }}>
            The App may request the following permissions:
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {[
              {
                title: "Internet Access",
                desc: "Required for online features and authentication",
              },
              {
                title: "Storage Access",
                desc: "For importing images and saving your card designs",
              },
            ].map((perm, idx) => (
              <Box
                key={idx}
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 2,
                  p: 2,
                  backgroundColor: "#f8f9fa",
                  borderRadius: 2,
                }}
              >
                <CheckCircleIcon color="success" sx={{ mt: 0.5 }} />
                <Box>
                  <Typography variant="body1" fontWeight="bold">
                    {perm.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {perm.desc}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
          <Typography
            variant="body2"
            sx={{ mt: 2, fontStyle: "italic", color: "text.secondary" }}
          >
            These permissions are required solely for the functioning of the
            App's features and are not used to collect personal data without
            your consent.
          </Typography>
        </Box>
      ),
    },
    {
      id: "section5",
      title: "User-Generated Content",
      icon: <ImageIcon />,
      content: (
        <Box>
          <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 2 }}>
            Any images or content you import, upload, or create within the App
            remain your property. You confirm that you have the necessary rights
            to use such content.
          </Typography>
          <Box
            sx={{
              p: 2,
              backgroundColor: "#e8f5e9",
              borderRadius: 2,
              borderLeft: "4px solid #4caf50",
            }}
          >
            <Typography variant="body2" fontWeight="bold" color="success.dark">
              We respect your ownership
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              We do not store or reuse your images without your permission.
            </Typography>
          </Box>
        </Box>
      ),
    },
    {
      id: "section6",
      title: "Downloads",
      icon: <DownloadIcon />,
      content: (
        <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
          You may download your card designs for personal use. We are not
          responsible for how you share, publish, or distribute your downloaded
          content.
        </Typography>
      ),
    },
    {
      id: "section7",
      title: "Data Collection & Privacy",
      icon: <PrivacyTipIcon />,
      highlight: true,
      content: (
        <Box>
          <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 2 }}>
            The App uses Firebase services for authentication. Only essential
            user information such as email and password (securely hashed by
            Firebase) is stored.
          </Typography>
          <Box
            sx={{
              p: 2,
              backgroundColor: "#e3f2fd",
              borderRadius: 2,
              borderLeft: "4px solid #2196f3",
            }}
          >
            <Typography variant="body2" fontWeight="bold" color="info.dark">
              Privacy First
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              The App does not store additional personal data without your
              consent. For more information, please refer to our Privacy Policy.
            </Typography>
          </Box>
        </Box>
      ),
    },
    {
      id: "section8",
      title: "Limitations of Liability",
      icon: <GavelIcon />,
      content: (
        <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
          We do not guarantee uninterrupted access to the App. We are not liable
          for data loss, device malfunction, unauthorized account access, or
          network issues.
        </Typography>
      ),
    },
    {
      id: "section9",
      title: "Updates & Modifications",
      icon: <UpdateIcon />,
      content: (
        <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
          We may update or modify these Terms at any time. Continued use of the
          App after changes means you accept the updated Terms. We recommend
          reviewing this page periodically.
        </Typography>
      ),
    },
    {
      id: "section10",
      title: "Location Access",
      icon: <LocationOffIcon />,
      content: (
        <Box>
          <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 2 }}>
            The App does <strong>not</strong> collect or track your real-time
            location.
          </Typography>
          <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
            If in the future any feature requires access to your device's
            location, it will only be requested for a specific purpose and will
            be clearly explained within the App. You will have full control to
            grant or deny this permission.
          </Typography>
        </Box>
      ),
    },
    {
      id: "section11",
      title: "Contact Us",
      icon: <EmailIcon />,
      content: (
        <Box>
          <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 2 }}>
            For any questions or concerns regarding these Terms, please feel
            free to reach out to us:
          </Typography>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              backgroundColor: "#f5f5f5",
              borderRadius: 2,
              textAlign: "center",
            }}
          >
            <EmailIcon sx={{ fontSize: 40, color: "#667eea", mb: 1 }} />
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Email Support
            </Typography>
            <Button
              variant="contained"
              href="mailto:mesumnaqvi530@gmail.com"
              sx={{
                backgroundColor: "#667eea",
                "&:hover": { backgroundColor: "#5568d3" },
                textTransform: "none",
                px: 3,
              }}
            >
              mesumnaqvi530@gmail.com
            </Button>
          </Paper>
        </Box>
      ),
    },
  ];

  const handleAgree = () => {
    setAgree(true);
    setSnackbarOpen(true);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        py: { xs: 4, md: 6 },
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 5, color: "white" }}>
          <Box sx={{ display: "inline-flex", p: 2, backgroundColor: "rgba(255,255,255,0.2)", borderRadius: "50%", mb: 2 }}>
            <DescriptionIcon sx={{ fontSize: 50 }} />
          </Box>
          <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ textShadow: "2px 2px 4px rgba(0,0,0,0.3)", fontSize: { xs: "2rem", md: "3rem" } }}>
            Terms & Conditions
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.95, mb: 2 }}>CardStudio</Typography>
        </Box>

        <Paper elevation={8} sx={{ borderRadius: 3, overflow: "hidden", backgroundColor: "rgba(255, 255, 255, 0.98)" }}>
          <Box sx={{ p: { xs: 3, md: 4 }, background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)" }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ color: "#2c3e50" }}>Welcome to CardStudio</Typography>
            <Typography variant="body1" sx={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#34495e" }}>
              These Terms & Conditions ("Terms") govern your use of the CardStudio application ("App"). By installing or using the App, you agree to comply with these Terms. If you do not agree, please do not use the App.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Button variant="text" startIcon={<PrintIcon />} onClick={() => window.print()} sx={{ textTransform: "none", color: "#667eea" }}>Print</Button>
            </Box>
          </Box>

          <Box sx={{ p: { xs: 2, md: 3 } }}>
            {sections.map((section, index) => (
              <Box key={section.id} sx={{ mb: 3, p: 2, border: "1px solid #e0e0e0", borderRadius: 2 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1 }}>
                  <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", width: 36, height: 36, borderRadius: "50%", backgroundColor: section.highlight ? "#667eea" : "#e0e0e0", color: section.highlight ? "white" : "#666" }}>
                    {section.icon}
                  </Box>
                  <Typography variant="h6" sx={{ fontSize: { xs: "1rem", md: "1.1rem" }, color: section.highlight ? "#667eea" : "#2c3e50" }}>
                    {index + 1}. {section.title}
                  </Typography>
                </Box>
                <Divider sx={{ mb: 2 }} />
                {section.content}
              </Box>
            ))}
          </Box>

          <Box sx={{ p: { xs: 3, md: 4 }, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <CheckCircleIcon color={agree ? "success" : "disabled"} />
              <Typography variant="body2" color="text.secondary">{agree ? "You agree to the Terms" : "Please review the Terms"}</Typography>
            </Box>
            <Button variant="contained" size="large" onClick={handleAgree} sx={{ textTransform: "none" }}>I Agree</Button>
          </Box>

          <Box sx={{ p: { xs: 3, md: 4 }, backgroundColor: "#f8f9fa", borderTop: "3px solid #667eea", textAlign: "center" }}>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1, fontWeight: "bold" }}>© 2025 CardStudio. All rights reserved.</Typography>
            <Typography variant="caption" color="text.secondary">By using our application, you acknowledge that you have read and understood these terms.</Typography>
          </Box>
        </Paper>
      </Container>

      <Snackbar open={snackbarOpen} autoHideDuration={2500} onClose={() => setSnackbarOpen(false)} anchorOrigin={{ vertical: "bottom", horizontal: "center" }}>
        <Alert severity="success" variant="filled" onClose={() => setSnackbarOpen(false)}>
          Thank you for agreeing to the Terms.
        </Alert>
      </Snackbar>
    </Box>
  );
}
