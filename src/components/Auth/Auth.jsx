import { Select } from "@alfalab/core-components-select";
import logo from "../../images/LogoHeader.svg";
import style from "./Auth.module.css";
import {
    BaseOption,
    
} from '@alfalab/core-components-select/shared';
import { Button } from "@alfalab/core-components-button";
import { useState } from "react";

export default function Auth() {
    
    const OPTIONS = [
        { key: '1', content: 'Neptunium' },
        { key: '2', content: 'Plutonium' },
        { key: '3', content: 'Americium' },
        { key: '4', content: 'Curium' },
        { key: '5', content: 'Berkelium' },
        { key: '6', content: 'Californium' },
        { key: '7', content: 'Einsteinium' },
        { key: '8', content: 'Fermium'},
    ];
    const [selectedOption, setSelectedOption] = useState(false);

    const handleSelectChange = (selectedKey) => {
        setSelectedOption(selectedKey);
    };

  return (
    <section className={style.auth}>
        <div className={style.authContainer}>
            <div className={style.authContainerHeader}>
                <img className={style.logo} src={logo} />
            </div>
            <div className={style.authSelect}>
                <h5 className={style.authTitle}>Выберите аккаунт для входа</h5>
                <div style={{ width: 320, marginBottom: '72px'}}>
                    <Select
                        allowUnselect={true}
                        size='m'
                        options={OPTIONS}
                        // placeholder='Аккаунт'
                        label='Аккаунт'
                        Option={BaseOption}
                        block={true}
                        optionClassName={style.optionClassName}
                        onChange={handleSelectChange}

                    />
                </div>
                <div>
                    <Button 
                        disabled={!selectedOption}
                        view='primary'
                        size="s"
                        // onClick={handleLogin}
                    >Войти</Button>
                </div>
            </div> 
        </div>
    </section>
  );
}