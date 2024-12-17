<ScrollView horizontal={true}>
    {arr.map((_, index) => {
        const isFirst = index === 0;
        const isLast = index === arr.length - 1;
        return (
            <View key={index} style={{ marginLeft: isFirst ? horizontalScale(10) : 5, marginRight: isLast ? horizontalScale(10) : 5 }}>
                <CustomTab
                    title={'PRESS ME'}
                    onPress={() => HandlePressme()}
                    activeBgColor={'#2979F2'}
                    inActiveBgColor={'#6da6fc'}
                    isActive={true}
                    fontWeight={'Light'}
                    activeFontColor={'#ffffff'}
                    inActiveFontColor={'#e0e0e0'}
                />
            </View>
        );
    })}
</ScrollView>


<CustomBadge
                title={'Economics'}
                bgColor={'#145855'}
                bRadius={100}
                widthPadding={10}
                height={30}
                fontWeight={'Regular'}
            />