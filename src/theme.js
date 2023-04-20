import { createTheme } from "@mui/material";

const theme = createTheme({
    components: {
        MuiAppBar: {
            styleOverrides: {
                colorPrimary: {
                    backgroundColor: "white",
                    height: '64px',
                    borderBottom: '1px solid rgba(72, 94, 144, 0.16)',
                }
            }
        },
        MuiListItem: {
            styleOverrides: {
                root: {
                    display: 'block'
                }
            }
        },
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true,
                textTransform: 'none'
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none"
                }
            }
        }
    }
});

export default theme