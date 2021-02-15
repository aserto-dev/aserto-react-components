# Aserto React Components

A self-contained Aserto-themed React component library.

## Installing

```bash
yarn add @aserto/aserto-react-components
```

## Importing

```javascript
import { Button, Divider } from '@aserto/aserto-react-components'
```

## Components

### ApplicationCard

```javascript
import { ApplicationCard } from '@aserto/aserto-react-components'
import { CardDeck } from 'react-bootstrap'

const Page = ({applications}) => {
  const onClick = () => {
    // navigate
  }
  return (
    <CardDeck>
      { applications && appications.map(a => 
          <ApplicationCard application={a} onClick={onClick} />
        )
      }
    </CardDeck>
}
```

### Breadcrumb

### Button

### DataTable

### Divider

### Highlight

### Input

### Loading

### NavBar

### PageHeader

### PageTitle

### PlayButton

### RefreshButton

### Select

### TextArea

### UserCard
