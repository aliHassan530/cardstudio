// TermsAndConditions.tsx
import React, { useState } from "react";
// man
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
import DescriptionIcon from "@mui/icons-material/Description"; // kept for fallback
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
            CardStudio allows users to create, edit, and download custom card
            designs such as Birthday Cards, Marriage Cards, and others. You
            may import images, choose designs, and export your final card in PDF
            or image format.
          </Typography>
          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mt: 2 }}>
            <Chip label="Card Design" size="small" color="primary" variant="outlined" />
            <Chip label="PDF Export" size="small" color="primary" variant="outlined" />
            <Chip label="Image Import" size="small" color="primary" variant="outlined" />
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
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 3 }}>
            <Paper elevation={0} sx={{ p: 2.5, backgroundColor: "#f0f4ff", borderRadius: 2, border: "1px solid #d0d9ff" }}>
              <Typography variant="h6" fontWeight="bold" color="primary" gutterBottom>Offline Mode</Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
                Basic functionality is available without an internet connection.
                Create and edit cards locally on your device.
              </Typography>
            </Paper>
            <Paper elevation={0} sx={{ p: 2.5, backgroundColor: "#fff4f0", borderRadius: 2, border: "1px solid #ffd9cc" }}>
              <Typography variant="h6" fontWeight="bold" color="secondary" gutterBottom>Online Mode</Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
                Advanced features require an active internet connection and user
                authentication through Firebase or other backend services.
              </Typography>
            </Paper>
          </Box>
        </Box>
      ),
    },
    {
      id: "section3",
      title: "User Accounts & Authentication",
      icon: <AccountCircleIcon />,
      highlight: true,
      content: (
        <Box>
          <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 2 }}>
            If you create an account, you must provide accurate information. Authentication is handled via Firebase Authentication. We do not see your password in plain text.
          </Typography>
          <Box sx={{ p: 2, backgroundColor: "#fff9e6", borderRadius: 2, borderLeft: "4px solid #ffc107", mb: 2 }}>
            <Typography variant="body2" fontWeight="bold" color="warning.dark" gutterBottom>Your Responsibility</Typography>
            <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
              Keep your credentials secure. Notify us immediately at mesumnaqvi530@gmail.com if you suspect unauthorized access.
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
            You may request account deletion; deletion requests will remove user data from our servers and backups within the limits described in our Privacy Policy.
          </Typography>
        </Box>
      ),
    },
    {
      id: "section4",
      title: "Permissions & Device Access",
      icon: <SecurityIcon />,
      content: (
        <Box>
          <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 2 }}>
            To provide features, the App may request permission(s) — we explain why each permission is needed below.
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {[
              { title: "Internet / Network", desc: "Required for online features, authentication, and syncing." },
              { title: "Storage / Files", desc: "Needed to import images and export/save PDFs or images to your device." },
              { title: "Camera", desc: "If you choose to capture images directly from your device." },
              { title: "Print / Share", desc: "Used when you print or share your final card via system dialogs." },
            ].map((perm, idx) => (
              <Box key={idx} sx={{ display: "flex", alignItems: "flex-start", gap: 2, p: 2, backgroundColor: "#f8f9fa", borderRadius: 2 }}>
                <CheckCircleIcon color="success" sx={{ mt: 0.5 }} />
                <Box>
                  <Typography variant="body1" fontWeight="bold">{perm.title}</Typography>
                  <Typography variant="body2" color="text.secondary">{perm.desc}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
          <Typography variant="body2" sx={{ mt: 2, fontStyle: "italic", color: "text.secondary" }}>
            Permissions are used only for the stated purposes and will be requested at runtime. You can revoke permissions through your device settings.
          </Typography>
        </Box>
      ),
    },
    {
      id: "section5",
      title: "User-Generated Content & Ownership",
      icon: <ImageIcon />,
      content: (
        <Box>
          <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 2 }}>
            Any images or content you import, upload, or create remain your property. By using content (images, text) that belongs to others, you confirm you have the rights to do so.
          </Typography>
          <Box sx={{ p: 2, backgroundColor: "#e8f5e9", borderRadius: 2, borderLeft: "4px solid #4caf50" }}>
            <Typography variant="body2" fontWeight="bold" color="success.dark">We respect your ownership</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>We do not use your images for any purpose without explicit permission.</Typography>
          </Box>
        </Box>
      ),
    },
    {
      id: "section6",
      title: "Downloads, Export & Sharing",
      icon: <DownloadIcon />,
      content: (
        <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
          You may download your designs for personal use (PDF, PNG, JPEG). We are not responsible for how you distribute or publish those files. Some exports may include metadata (e.g., creation date).
        </Typography>
      ),
    },
    {
      id: "section7",
      title: "Data Collection, Storage & Third-Party Services",
      icon: <PrivacyTipIcon />,
      highlight: true,
      content: (
        <Box>
          <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 2 }}>
            We use third-party services to provide functionality (authentication, data storage, analytics). Examples: Firebase (Auth, Firestore, Storage) and printing/sharing integrations.
          </Typography>
          <Box sx={{ p: 2, backgroundColor: "#e3f2fd", borderRadius: 2, borderLeft: "4px solid #2196f3" }}>
            <Typography variant="body2" fontWeight="bold" color="info.dark">Privacy First</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Only essential user information (e.g., email) is stored on servers. We do not sell personal data. For detailed information, see our Privacy Policy (link provided in the app and Play Store listing).
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Third-party data processing is governed by those providers' policies (e.g., Firebase). We require processors to protect your data.
          </Typography>
        </Box>
      ),
    },
    {
      id: "section9",
      title: "Limitations of Liability",
      icon: <UpdateIcon />,
      content: (
        <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
          We do our best to provide a stable service, but we are not liable for data loss, device malfunction, unauthorized access, or indirect damages. Use exported files at your own discretion.
        </Typography>
      ),
    },
    {
      id: "section10",
      title: "Location & Sensitive Data",
      icon: <LocationOffIcon />,
      content: (
        <Box>
          <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 2 }}>
            The App does <strong>not</strong> collect real-time location or any sensitive personal data by default. If future features require sensitive data, explicit consent will be requested and explained.
          </Typography>
          <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
            We will always show purpose and usage when requesting access to sensitive device features.
          </Typography>
        </Box>
      ),
    },
    {
      id: "section11",
      title: "Children & Age Restrictions",
      icon: <EmailIcon />,
      content: (
        <Box>
          <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 2 }}>
            The App is not intended for children under 13 (or applicable local age). If you are under the age required in your country, do not create an account or submit personal information.
          </Typography>
          <Typography variant="body2">
            If a parent or guardian believes their child provided personal information, contact us to request deletion.
          </Typography>
        </Box>
      ),
    },
    {
      id: "section12",
      title: "Data Retention & Deletion",
      icon: <PrintIcon />,
      content: (
        <Box>
          <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 2 }}>
            We retain user data only as long as necessary to provide the service and for legal compliance. You may request data export or deletion via email: mesumnaqvi530@gmail.com.
          </Typography>
        </Box>
      ),
    },
    {
      id: "section13",
      title: "Contact & Effective Date",
      icon: <DescriptionIcon />,
      content: (
        <Box>
          <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 2 }}>
            For questions about these Terms or our practices, email us at:
          </Typography>
          <Paper elevation={0} sx={{ p: 3, backgroundColor: "#f5f5f5", borderRadius: 2, textAlign: "center" }}>
            <EmailIcon sx={{ fontSize: 40, color: "#667eea", mb: 1 }} />
            <Typography variant="h6" fontWeight="bold" gutterBottom>Email Support</Typography>
            <Button variant="contained" href="mailto:mesumnaqvi530@gmail.com" sx={{ textTransform: "none", backgroundColor: "#667eea", "&:hover": { backgroundColor: "#5568d3" } }}>
              mesumnaqvi530@gmail.com
            </Button>
            <Typography variant="caption" sx={{ display: "block", mt: 1 }}>Effective Date: December 8, 2025</Typography>
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
    <Box sx={{ minHeight: "100vh", background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", py: { xs: 4, md: 6 } }}>
      <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 5, color: "white" }}>
          {/* Header uses custom image favicon if available; fallback to DescriptionIcon */}
          <Box sx={{ display: "inline-flex", p: 1.25, backgroundColor: "rgba(255,255,255,0.2)", borderRadius: "50%", mb: 2 }}>
            <img src="/cardstudio-icon.svg" alt="Card Studio" style={{ width: 56, height: 56, objectFit: "contain" }} onError={(e)=>{ (e.target as HTMLImageElement).style.display='none'; }} />
            <DescriptionIcon sx={{ fontSize: 50, display: "none" }} />
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
            <Typography variant="caption" color="text.secondary">By using our application, you acknowledge that you have read and understood these terms. For full details see our Privacy Policy available in the Play Store listing and inside the app.</Typography>
          </Box>
        </Paper>
      </Container>

      <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={() => setSnackbarOpen(false)} anchorOrigin={{ vertical: "bottom", horizontal: "center" }}>
        <Alert severity="success" variant="filled" onClose={() => setSnackbarOpen(false)}>Thank you for agreeing to the Terms.</Alert>
      </Snackbar>
    </Box>
  );
}
