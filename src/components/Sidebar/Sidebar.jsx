import React from 'react';
import { Box, Button, Link, Typography } from '@mui/material';
import { Close, ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';

import { links } from '../Sidebar/links';

import klashaFullLogo from '../../assets/logo/klasha__logo.svg';
import klashaKLogo from '../../assets/logo/klasha-k.svg';

import { NavLink } from 'react-router-dom';
import { useStateContext } from '../../contexts/ContextProvider';

const Sidebar = () => {
  const sideBarBg = '#FFFBF7';
  const textRed = '#EF2C5A';
  const textGray = 'rgb(107 114 128)';
  const textHover = 'rgb(107 114 128)';

  const { fullMenu, setFullMenu } = useStateContext();

  const activeLink = {
    display: 'flex',
    alignItems: 'center',
    padding: '1.5rem 1rem',
    color: textRed
  };

  const normalLink = {
    display: 'flex',
    alignItems: 'center',
    padding: '3px 4px',
    color: textHover
  };
  return (
    <Box sx={{ height: '100vh', backgroundColor: sideBarBg, padding: '20px' }}>
      <Box>
        <Box
          sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '2rem' }}>
          <Button type="button" onClick={() => {}}>
            <Close />
          </Button>
          <Link
            href="/"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '1rem'
            }}>
            {fullMenu ? (
              <img src={klashaFullLogo} alt="klasha logo" />
            ) : (
              <img src={klashaKLogo} alt="klasha logo" />
            )}
          </Link>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Box sx={{ marginTop: '2.5rem' }}>
            {links.map((item) => (
              <div key={item.title}>
                <Typography
                  variant="body1"
                  sx={{ color: textGray, marginY: '0.75rem', marginTop: '1rem' }}>
                  {fullMenu ? `${item.title1}` : `${item.title2}`}
                </Typography>
                {item.links.map((link) => (
                  <NavLink
                    to={link.path ? `/${link.path}` : '#'}
                    key={link.name}
                    sx={{}}
                    className={({ isActive }) => [
                      isActive ? activeLink : normalLink,
                      !link.path && normalLink
                    ]}>
                    {fullMenu ? (
                      <Box
                        sx={{ display: 'flex', alignItems: 'center' }}
                        className={`{({ isActive }) => [
                            isActive ? activeLink : normalLink,
                          ]}`}>
                        <Typography variant="body1" sx={{ marginRight: '0.5' }}>
                          {link.icon}
                        </Typography>
                        <Typography variant="body1" sx={{ underline: 'none' }}>
                          {link.name}
                        </Typography>
                      </Box>
                    ) : (
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="body1" sx={{ marginRight: '0.5' }}>
                          {link.icon}
                        </Typography>
                      </Box>
                    )}
                  </NavLink>
                ))}
              </div>
            ))}
          </Box>
          {/* lower hide button */}
          <Button
            type="button"
            onClick={() => setFullMenu((prevActiveMenu) => !prevActiveMenu)}
            variant="outlined"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginX: '1.25rem',
              hover: '#F7F7F7',
              marginTop: '5rem'
            }}>
            {fullMenu ? (
              <>
                <ArrowBackIosNew />
                <span sx={{ marginRight: '0.5' }}>Hide panel</span>
              </>
            ) : (
              <>
                <ArrowForwardIos />
              </>
            )}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
