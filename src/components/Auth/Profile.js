/* eslint-disable new-cap */
/* eslint-disable react/no-children-prop */
/* eslint-disable react/function-component-definition */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  DarkMode, Flex, Image, Text, Heading, Button,
} from '@chakra-ui/react';
import { connect } from 'react-redux';
import { auth } from '../../services/firebase';
import { fetchUserFirebase } from '../../actions';

const Profile = (props) => {
  const user = auth.currentUser;
  console.log('user', user, user.uid);
  const navigate = useNavigate();

  useEffect(() => {
    props.fetchUserFirebase(user.uid);
  }, []);

  const handleEdit = () => {
    navigate('/profile/edit');
  };

  return (
    <Flex
      justify="center"
      mb={12}
      ml={10}
      mr={10}
      flexDir={['column', 'column', 'row']}
    >
      <Flex
        borderWidth="1px"
        borderRadius="lg"
        w="1000px"
        p={10}
        gridGap={10}
      >
        <Flex justify="center" w="500px">
          {props.currentUser.photo
            ? (
              <Image src={props.currentUser.photo}
                w="500px"
                h="500px"
                objectFit="cover"
                borderRadius="md"
              />
            ) : ''}

        </Flex>
        <Flex flexDir="column" gridGap={6} w="500px">
          <Flex flexDir="column">
            <Heading fontSize="4xl"
              fontWeight={500}
              color="#E0E2E4"
            >{props.currentUser.name}
            </Heading>
            <Flex gridGap={1}>
              <Text fontSize="lg" color="#E0E2E4">{props.currentUser.role} {props.currentUser.year}</Text>
            </Flex>
          </Flex>

          <Flex flexDir="column" gridGap={1}>
            <Text color="#E0E2E4" fontSize="lg" fontWeight={500}>About</Text>

            {props.currentUser.major ? (
              <Flex gridGap={2}>
                <Text fontSize="md">Major:</Text>
                <Text fontSize="md" color="#E0E2E4">{props.currentUser.major}</Text>
              </Flex>
            ) : ''}

            {props.currentUser.minor
              ? (
                <Flex gridGap={2}>
                  <Text fontSize="md">Minor:</Text>
                  <Text fontSize="md" color="#E0E2E4">{props.currentUser.minor}</Text>
                </Flex>
              ) : ''}
            {props.currentUser.modification
              ? (
                <Flex gridGap={2}>
                  <Text fontSize="md">Modification:</Text>
                  <Text fontSize="md" color="#E0E2E4">{props.currentUser.modification}</Text>
                </Flex>
              ) : ''}
            {props.currentUser.home
              ? (
                <Flex gridGap={2}>
                  <Text fontSize="md">Hometown:</Text>
                  <Text fontSize="md" color="#E0E2E4">{props.currentUser.home}</Text>
                </Flex>
              ) : ''}
            {props.currentUser.birthday
              ? (
                <Flex gridGap={2}>
                  <Text fontSize="md">Birthday:</Text>
                  <Text fontSize="md" color="#E0E2E4">{props.currentUser.birthday}</Text>
                </Flex>
              ) : ''}

          </Flex>
          <Flex flexDir="column" gridGap={1}>
            <Text color="#E0E2E4" fontSize="lg" fontWeight={500}>Favorites</Text>
            {props.currentUser.quote
              ? (
                <Flex gridGap={2}>
                  <Text fontSize="md">Quote:</Text>
                  <Text fontSize="md" color="#E0E2E4">{props.currentUser.quote}</Text>
                </Flex>
              ) : ''}
            {props.currentUser.shoe
              ? (
                <Flex gridGap={2}>
                  <Text fontSize="md">Shoe:</Text>
                  <Text fontSize="md" color="#E0E2E4">{props.currentUser.shoe}</Text>
                </Flex>
              ) : '' }
            {props.currentUser.artist
              ? (
                <Flex gridGap={2}>
                  <Text fontSize="md">Artist:</Text>
                  <Text fontSize="md" color="#E0E2E4">{props.currentUser.artist}</Text>
                </Flex>
              ) : ''}
            {props.currentUser.color
              ? (
                <Flex gridGap={2}>
                  <Text fontSize="md">Color:</Text>
                  <Text fontSize="md" color="#E0E2E4">{props.currentUser.color}</Text>
                </Flex>
              ) : ''}
            <Flex>
              <DarkMode>
                <Button fontWeight="normal"
                  mt={4}
                  mr={2}
                  borderWidth="1px"
                  bg=""
                  onClick={handleEdit}
                >Edit
                </Button>
              </DarkMode>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.users.current,
});

export default connect(mapStateToProps, { fetchUserFirebase })(Profile);
