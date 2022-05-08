/* eslint-disable react/function-component-definition */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Box,
  Flex,
  Text,
  Button,
  Input,
  DarkMode, Image,
} from '@chakra-ui/react';
import { auth } from '../../services/firebase';
import { updateProfile, fetchUserFirebase } from '../../actions/index';

const EditProfile = (props) => {
  const user = auth.currentUser;
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [role, setRole] = useState('');
  const [major, setMajor] = useState('');
  const [minor, setMinor] = useState('');
  const [modification, setModification] = useState('');
  const [home, setHome] = useState('');
  const [birthday, setBirthday] = useState('');
  const [quote, setQuote] = useState('');
  const [shoe, setShoe] = useState('');
  const [artist, setArtist] = useState('');
  const [color, setColor] = useState('');
  const [photo, setPhoto] = useState('');

  useEffect(() => {
    const fetch = async () => {
      await props.fetchUserFirebase(user.uid);
      setName(props.currentUser.name);
    };
    fetch();
  }, []);

  const handleSave = () => {
    console.log('name', name);

    const fields = {
      ...(name && { name }),
      ...(year && { year }),
      ...(role && { role }),
      ...(major && { major }),
      ...(minor && { minor }),
      ...(modification && { modification }),
      ...(home && { home }),
      ...(photo && { photo }),
      ...(birthday && { birthday }),
      ...(quote && { quote }),
      ...(shoe && { shoe }),
      ...(artist && { artist }),
      ...(color && { color }),
    };
    props.updateProfile(user.uid, fields);
    navigate('/profile');
  };

  const handleCancel = () => {
    navigate('/profile');
  };

  if (props.currentUser) {
    return (
      <Flex
        justify="center"
        mb={12}
        ml={12}
        mr={12}
      >
        <Flex w="1000px"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          boxShadow="sm"
          rounded="md"
          alignItems={['center', 'center', 'flex-start']}
          flexDir={['column', 'column', 'row']}
        >
          <Flex p={10} justify="center" w="80%">
            <Image src={props.currentUser.photo} w="100%" objectFit="contain" />
          </Flex>
          <Box p={10} w="100%">
            <Text mb={2} color="#6A686E">Name</Text>
            <Input mb={4}
              defaultValue={props.currentUser.name}
              onChange={(e) => setName(e.target.value)}
            />
            <Text mb={2} color="#6A686E">Year</Text>
            <Input mb={4}
              defaultValue={props.currentUser.year}
              onChange={(e) => setYear(e.target.value)}
            />
            <Text mb={2} color="#6A686E">Role</Text>
            <Input mb={4}
              defaultValue={props.currentUser.role}
              onChange={(e) => setRole(e.target.value)}
            />
            <Text mb={2} color="#6A686E">Major</Text>
            <Input mb={4}
              defaultValue={props.currentUser.major}
              onChange={(e) => setMajor(e.target.value)}
            />
            <Text mb={2} color="#6A686E">Minor</Text>
            <Input mb={4}
              defaultValue={props.currentUser.minor}
              onChange={(e) => setMinor(e.target.value)}
            />
            <Text mb={2} color="#6A686E">Modification</Text>
            <Input mb={4}
              defaultValue={props.currentUser.modification}
              onChange={(e) => setModification(e.target.value)}
            />
            <Text mb={2} color="#6A686E">Hometown</Text>
            <Input mb={4}
              defaultValue={props.currentUser.home}
              onChange={(e) => setHome(e.target.value)}
            />
            <Text mb={2} color="#6A686E">Birthday</Text>
            <Input mb={4}
              defaultValue={props.currentUser.birthday}
              onChange={(e) => setBirthday(e.target.value)}
            />
            <Text mb={2} color="#6A686E">Favorite Quote</Text>
            <Input mb={4}
              defaultValue={props.currentUser.quote}
              onChange={(e) => setQuote(e.target.value)}
            />
            <Text mb={2} color="#6A686E">Favorite Shoe</Text>
            <Input mb={4}
              defaultValue={props.currentUser.shoe}
              onChange={(e) => setShoe(e.target.value)}
            />
            <Text mb={2} color="#6A686E">Favorite Artist</Text>
            <Input mb={4}
              defaultValue={props.currentUser.artist}
              onChange={(e) => setArtist(e.target.value)}
            />
            <Text mb={2} color="#6A686E">Favorite Color</Text>
            <Input mb={4}
              defaultValue={props.currentUser.color}
              onChange={(e) => setColor(e.target.value)}
            />
            <Text mb={2} color="#6A686E">Profile Picture URL</Text>
            <Input mb={4}
              defaultValue={props.currentUser.photo}
              onChange={(e) => setPhoto(e.target.value)}
            />
            <Flex justify="space-between">
              <DarkMode>
                <Box>
                  <Button fontWeight="normal" mt={2} mr={2} colorScheme="green" onClick={handleSave}>Save</Button>
                  <Button fontWeight="normal"
                    mt={2}
                    mr={2}
                    onClick={handleCancel}
                    borderWidth="1px"
                    bg=""
                  >Cancel
                  </Button>
                </Box>
              </DarkMode>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    );
  } else {
    return <div>Loading</div>;
  }
};

const mapStateToProps = (state) => ({
  currentUser: state.users.current,
});

export default connect(mapStateToProps, { updateProfile, fetchUserFirebase })(EditProfile);
