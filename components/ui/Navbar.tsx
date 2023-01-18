import { Spacer, Text, useTheme } from '@nextui-org/react'
import Image from 'next/image';

export const Navbar = () => {

    const { theme } = useTheme();

  return (
    <div style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '0 20px',
        backgroundColor: theme?.colors.gray100.value
    }}>
        <Image 
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/382.png"
            alt='Icono de la app'
            width={70}
            height={70}
        />
        <Text h2>P</Text>
        <Text h3>okemón</Text>
        <Spacer css={{ flex: 1 }}/>
        <Text h2>Favoritos</Text>
    </div>
  )
}
