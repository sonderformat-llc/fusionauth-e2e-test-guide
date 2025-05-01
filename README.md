# Fusionauth Quickstart Template

This is a template repo for creating FusionAuth quickstarts. If you're creating or modifying a quickstart,
follow these guidelines so we can maintain consistency.

```mermaid
graph TD
    SwiftSDK(Swift SDK Repository) --> Z
    AndroidSDK(<strong>Android SDK</strong>
  <i>FusionAuth/fusionauth-android-sdk</i>
<div style='text-align:left'>
./app
./library
</div>
) --> AndroidApp
AndroidApp(Android SDK Application) --> AndroidLib
AndroidLib(Android SDK Library) --> AndroidQuickstart
AndroidQuickstart(Android SDK Quickstart)



```

## Visual representation: How to setup a Quickstart or SDK repository

```mermaid
graph TD
    C(<strong>fusionauth-quickstart-boilerplate</strong>
    <div style='text-align:left'>
        ./quickstart-boilerplate/CHANGELOG.md
        ./quickstart-boilerplate/CODE_OF_CONDUCT.md
        ./quickstart-boilerplate/CONTRIBUTING.md
        ./quickstart-boilerplate/LICENSE
        ./quickstart-boilerplate/README.md
        ./quickstart-boilerplate/SECURITY.md
        ./quickstart-boilerplate/github/ISSUE_TEMPLATE
        ./quickstart-boilerplate/github/dependabot.yml
        ./quickstart-boilerplate/github/workflows/playwright.yml
    </div>)
C --- YourRepository


YourRepository[Your <strong>Quickstart</strong> Repository]




```

# SDK

```mermaid
graph TD
    Guide(quickstart guide repository) --> Boiler
    Boiler(./quickstart-boilerplate) -->|copy| New
    New(Your <strong>Quickstart</strong> Repository)
```