![This is an image](https://myoctocat.com/assets/images/octocats/octocat-24.png)
Hook for React, helps you keep track of clicks on the INSIDE and OUTSIDE areas. This is an advanced version - it allows you to pass an array of refs that can be interacted with.

## Install

```
npm install useonclickadvanced
```

## Usage

```js
const Header = ({ toggleMenu }) => {
  const nodeDiv = useRef(null);
  const nodeButt = useRef(null);

  // just pass refs array, these elements will be "frozen" and will not be clicked
  // anything outside will be clicked
  useOnClickOutside([nodeDiv, nodeButt], () => console.log("clicked"));
  return (
    <Container>
      <Wrapper>
        <Section> Content </Section>
        <AdBanner> Advertisment </AdBanner>
        <SomeBlock ref={nodeDiv}>
          Use ForwardRef() for descendents components
        </SomeBlock>
        <button ref={nodeButt}> Close </button>
      </Wrapper>
    </Container>
  );
};
```

## Example

Problem: to make the menu close by clicking on the external area and by clicking on the button. But since the button was under the outer area, the button script conflicted with the hook. Therefore, we add its link to the array of links that do not need to perform actions, so that the button script closes the menu.

```js
const Header = ({ setIsLight, isLight, keycloak }) => {
  const sideBar = useRef(null);
  const buttonCLose = useRef(null);

  const { isMenuOpen, toggleMenuMode, toggleMenu, toggleMenuClose } =
    useContext(MenuContext);

  // you can pass 1 or more refs
  useOnClickOutside([sideBar, buttonCLose], () => toggleMenu(false));

  return (
    <Container>
      <HeaderRow>
        <Col>
          <NavLink to="/">
            <SiteLogo src={logo} />
          </NavLink>
        </Col>

        <Col lg="6">
          <Navigation direction="row" />
        </Col>
        <Col>
          <Account className="justify-content-end">
            <HamburgerButton
              ref={buttonCLose}
              isMenuOpen={isMenuOpen}
              toggleMenuMode={toggleMenuMode}
              toggleMenuClose={toggleMenuClose}
            />
          </Account>
        </Col>
      </HeaderRow>
      <SideMenu
        ref={sideBar}
        setIsLight={setIsLight}
        isLight={isLight}
        keycloak={keycloak}
      />
    </Container>
  );
};

export default Header;
```
