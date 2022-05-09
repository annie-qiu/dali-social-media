/* eslint-disable new-cap */
/* eslint-disable react/no-children-prop */
/* eslint-disable react/function-component-definition */
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  DarkMode, IconButton, Flex, Image, Text, Heading,
} from '@chakra-ui/react';
import { IoChevronBackOutline } from 'react-icons/io5';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions';

const UserView = (props) => {
  const userName = (useParams().userID).replace('-', ' ');
  const navigate = useNavigate();

  useEffect(() => {
    props.fetchUser(userName);
  }, []);

  const handleBack = () => {
    navigate('/people');
  };

  console.log(props.currentUser);

  return (
    <Flex
      justify="center"
      mb={12}
      ml="auto"
      mr="auto"
      flexDir={['column', 'column', 'row']}
    >
      <DarkMode>
        <IconButton fontSize="xl"
          borderWidth="1px"
          mr={4}
          mb={4}
          w="40px"
          bg=""
          icon={<IoChevronBackOutline />}
          onClick={handleBack}
        />
      </DarkMode>
      <Flex
        borderWidth="1px"
        borderRadius="lg"
        w="900px"
        p={10}
        gridGap={10}
      >
        <Flex justify="center" w="500px">
          <Image src={props.currentUser.picture}
            w="500px"
            h="500px"
            objectFit="cover"
            borderRadius="md"
          />
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
            <Flex gridGap={2}>
              <Text fontSize="md">Major:</Text>
              <Text fontSize="md" color="#E0E2E4">{props.currentUser.major}</Text>
            </Flex>
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
            <Flex gridGap={2}>
              <Text fontSize="md">Hometown:</Text>
              <Text fontSize="md" color="#E0E2E4">{props.currentUser.home}</Text>
            </Flex>
            <Flex gridGap={2}>
              <Text fontSize="md">Birthday:</Text>
              <Text fontSize="md" color="#E0E2E4">{props.currentUser.birthday}</Text>
            </Flex>
          </Flex>
          <Flex flexDir="column" gridGap={1}>
            <Text color="#E0E2E4" fontSize="lg" fontWeight={500}>Favorites</Text>
            <Flex gridGap={2}>
              <Text fontSize="md">Quote:</Text>
              <Text fontSize="md" color="#E0E2E4">{props.currentUser.quote}</Text>
            </Flex>
            <Flex gridGap={2}>
              <Text fontSize="md">Shoe:</Text>
              <Text fontSize="md" color="#E0E2E4">{props.currentUser.favoriteShoe}</Text>
            </Flex>
            <Flex gridGap={2}>
              <Text fontSize="md">Artist:</Text>
              <Text fontSize="md" color="#E0E2E4">{props.currentUser.favoriteArtist}</Text>
            </Flex>
            <Flex gridGap={2}>
              <Text fontSize="md">Color:</Text>
              <Text fontSize="md" color="#E0E2E4">{props.currentUser.favoriteColor}</Text>
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

export default connect(mapStateToProps, { fetchUser })(UserView);
