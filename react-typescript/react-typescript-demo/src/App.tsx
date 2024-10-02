import './App.css';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Container } from './components/Container';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { Box } from './components/context/Box';
import { UserContextProvider } from './components/context/UserContext';
import { User } from './components/context/User';
import { Counter } from './components/class/Counter';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { List } from './components/generics/List';
import { RandomNumber } from './components/restriction/RandomNumber';
import { Toast } from './components/templateliterals/Toast';
import { CustomButton } from './components/html/Button';
import { CustomInput } from './components/html/Input';

function App() {
  
  const personName = {
    first: 'Steve',
    last: 'Rogers',
  }

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Princess',
      last: 'Diana'
    },
]

  return (
    <div className="App">
      {/* <Greet name='arvish' messageCount={20} isLoggedIn={false} /> */}
      {/* <Person name={personName} /> */}
      {/* <PersonList names={nameList} /> */}

      {/* <Status status='error' /> */}
      
      {/* <Heading>PlaceHolder Children Text</Heading> */}
      
      {/* <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio!</Heading>
      </Oscar> */}

      {/* <Greet name='arvish' isLoggedIn={false} /> */}

      {/* <Button 
        handleClick={(event, id) => {
          console.log('Button clicked', event, id)
      }} /> */}

      {/* <Input value='' handleChange={(event) => console.log(event)} /> */}
      
      {/* <Container styles={{ border: '1px solid black', padding: '1rem' }} /> */}

      {/* For Video-106 */}
      {/* <ThemeContextProvider>
         <Box />
      </ThemeContextProvider> */}

      {/* For Video-107 */}
      {/* <UserContextProvider>
        <User />
      </UserContextProvider> */}

      {/* <Counter message='The count value is' /> */}

      {/* <Private isLoggedIn={true} component={Profile} /> */}

      {/* Changes for Video - 111 */}
      {/* <List 
        items={['Batman', 'Superman', 'Wonder Woman']} 
        onClick={(item) => console.log(item)}
      />

      <List items={[1, 2, 3]} onClick={(item) => console.log(item)} /> */}

     {/* Changes for Video - 112 */}
      {/* <RandomNumber value={10} isPositive={true}/> */}

     {/* Changes for Video - 113 */}
     {/* <Toast position='center' /> */}

     {/* Changes for Video - 114 */}
     {/* <CustomButton variant='secondary' onClick = {() => console.log('Clicked')}>
       Primary Button
     </CustomButton> */}
     
     {/* <CustomInput /> */}

    </div>
  );
}

export default App;
