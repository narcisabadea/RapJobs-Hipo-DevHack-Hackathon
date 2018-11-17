<template>
    <v-container>
    <v-layout row wrap>
        <v-alert
            :value="true"
            type="warning"
        >
            <h3>Before each word on the test below, place a number that best describes you, 5 being most like you and 1 being least like you. Try to be objective.</h3>
        </v-alert>
    <v-container>
        <v-layout row wrap>
        <v-flex xs12 sm3>
            <v-text-field
            :rules="[char]"
            required
            label="OPTIMISTIC"
            v-model="C11">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            :rules="[char]"
            required
            label="VERY QUIET"
            v-model="C12">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            :rules="[char]"
            required
            label="DEEP FEELING"
            v-model="C13">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            :rules="[char]"
            required
            label="EMOTIONAL"
            v-model="C14">
            </v-text-field>
        </v-flex>
        </v-layout>
    </v-container>
    </v-layout>
    <v-layout row wrap>
    <v-container>
        <v-layout row wrap>
        <v-flex xs12 sm3>
            <v-text-field
            :rules="[char]"
            required
            label="GOAL-ORIENTED"
            v-model="C21">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            :rules="[char]"
            required
            label="PESSIMISTIC"
            v-model="C22">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            :rules="[char]"
            required
            label="SENSITIVE"
            v-model="C23">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            :rules="[char]"
            required
            label="DIFFICULTY KEEPING RESOLUTIONS"
            v-model="C24">
            </v-text-field>
        </v-flex>
        </v-layout>
    </v-container>
    </v-layout>
    <v-layout row wrap>
    <v-container>
        <v-layout row wrap>
        <v-flex xs12 sm3>
            <v-text-field
            :rules="[char]"
            required
            label="SELF-CONFIDENT"
            v-model="C31">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            :rules="[char]"
            required
            label="INTROVERT"
            v-model="C32">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            :rules="[char]"
            required
            label="SELF-CENTERED"
            v-model="C33">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            :rules="[char]"
            required
            label="COMPASSIONATE"
            v-model="C34">
            </v-text-field>
        </v-flex>
        </v-layout>
    </v-container>
    </v-layout>
    <v-layout row wrap>
    <v-container>
        <v-layout row wrap>
        <v-flex xs12 sm3>
            <v-text-field
            :rules="[char]"
            required
            label="ACTIVIST"
            v-model="C41">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            :rules="[char]"
            required
            label="NOT AGGRESSIVE"
            v-model="C42">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            :rules="[char]"
            required
            label="EASILY OFFENDED"
            v-model="C43">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            :rules="[char]"
            required
            label="IMPRACTICAL"
            v-model="C44">
            </v-text-field>
        </v-flex>
        </v-layout>
    </v-container>
    </v-layout>
    <v-layout row wrap>
    <v-container>
        <v-layout row wrap>
        <v-flex xs12 sm3>
            <v-text-field
            :rules="[char]"
            required
            label="DOMINANT"
            v-model="C51">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            :rules="[char]"
            required
            label="INDECISIVE"
            v-model="C52">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            :rules="[char]"
            required
            label="FAITHFUL FRIEND"
            v-model="C53">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            :rules="[char]"
            required
            label="EASILY DISCOURAGED"
            v-model="C54">
            </v-text-field>
        </v-flex>
        </v-layout>
    </v-container>
    </v-layout>
    <v-layout row wrap>
    <v-container>
        <v-layout row wrap>
        <v-flex xs12 sm3>
            <v-text-field
            :rules="[char]"
            required
            label="AGGRESSIVE"
            v-model="C61">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            :rules="[char]"
            required
            label="SLOW AND LAZY"
            v-model="C62">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            :rules="[char]"
            required
            label="SELF-SACRIFICING"
            v-model="C63">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            :rules="[char]"
            required
            label="UNDISCIPLINED"
            v-model="C64">
            </v-text-field>
        </v-flex>
        </v-layout>
    </v-container>
    </v-layout>
    <v-layout row wrap>
    <v-container>
        <v-layout row wrap>
        <v-flex xs12 sm3>
            <v-text-field
            :rules="[char]"
            required
            label="LEADERSHIP ABILITY"
            v-model="C71">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            :rules="[char]"
            required
            label="EASY GOING"
            v-model="C72">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            :rules="[char]"
            required
            label="LIKES BEHIND THE SCENES"
            v-model="C73">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            :rules="[char]"
            required
            label="WEAK-WILLED"
            v-model="C74">
            </v-text-field>
        </v-flex>
        </v-layout>
    </v-container>
    </v-layout>
    <v-layout row wrap>
    <v-container>
        <v-layout row wrap>
        <v-flex xs12 sm3>
            <v-text-field
            :rules="[char]"
            required
            label="STICK-TO-IT-IVENESS"
            v-model="C81">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            :rules="[char]"
            required
            label="CALM AND COOL"
            v-model="C82">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            :rules="[char]"
            required
            label="SUSPICIOUS"
            v-model="C83">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            :rules="[char]"
            required
            label="TALKATIVE"
            v-model="C84">
            </v-text-field>
        </v-flex>
        </v-layout>
    </v-container>
    </v-layout>
    <v-layout row wrap>
    <v-container>
        <v-layout row wrap>
        <v-flex xs12 sm3>
            <v-text-field
            :rules="[char]"
            required
            label="STRONG-WILLED"
            v-model="C91">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            :rules="[char]"
            required
            label="EFFICIENT"
            v-model="C92">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            :rules="[char]"
            required
            label="INTROSPECTIVE"
            v-model="C93">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            :rules="[char]"
            required
            label="ENJOYABLE"
            v-model="C94">
            </v-text-field>
        </v-flex>
        </v-layout>
    </v-container>
    </v-layout>
    <v-layout row wrap>
    <v-container>
        <v-layout row wrap>
        <v-flex xs12 sm3>
            <v-text-field
            :rules="[char]"
            required
            label="HOT-TEMPERED"
            v-model="C101">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            :rules="[char]"
            required
            label="DEPENDABLE"
            v-model="C102">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            :rules="[char]"
            required
            label="PERFECTIONNIST"
            v-model="C103">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            :rules="[char]"
            required
            label="FRIENDLY"
            v-model="C104">
            </v-text-field>
        </v-flex>
        </v-layout>
    </v-container>
    </v-layout>
    <v-layout row wrap>
    <v-container>
        <v-layout row wrap>
        <v-flex xs12 sm3>
            <v-text-field
            :rules="[char]"
            required
            label="INSENSITIVE"
            v-model="C111">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            :rules="[char]"
            required
            label="WITTY, DRY HUMOR"
            v-model="C112">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            :rules="[char]"
            required
            label="HARBORS RESENTMENT"
            v-model="C113">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            :rules="[char]"
            required
            label="RESTLESS"
            v-model="C114">
            </v-text-field>
        </v-flex>
        </v-layout>
    </v-container>
    </v-layout>
    <v-layout row wrap>
    <v-container>
        <v-layout row wrap>
        <v-flex xs12 sm3>
            <v-text-field
            :rules="[char]"
            required
            label="UNSYMPATHETIC"
            v-model="C121">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            :rules="[char]"
            required
            label="TEASES"
            v-model="C122">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            :rules="[char]"
            required
            label="CREATIVE"
            v-model="C123">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            :rules="[char]"
            required
            label="DIFFICULTY CONCENTRATING"
            v-model="C124">
            </v-text-field>
        </v-flex>
        </v-layout>
    </v-container>
    </v-layout>
    <v-layout row wrap>
    <v-container>
        <v-layout row wrap>
        <v-flex xs12 sm3>
            <v-text-field
            :rules="[char]"
            required
            label="SO DETERMINED YOU GET DEPRESSED "
            v-model="C131">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            :rules="[char]"
            required
            label="SELFISH"
            v-model="C132">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            :rules="[char]"
            required
            label="MOODY"
            v-model="C133">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            :rules="[char]"
            required
            label="LIVES IN PRESENT"
            v-model="C134">
            </v-text-field>
        </v-flex>
        </v-layout>
    </v-container>
    </v-layout>
    <v-layout row wrap>
    <v-container>
        <v-layout row wrap>
        <v-flex xs12 sm3>
            <v-text-field
            :rules="[char]"
            required
            label="DECISIVE"
            v-model="C141">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            :rules="[char]"
            required
            label="ORDERLY HABITS"
            v-model="C142">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            :rules="[char]"
            required
            label="CRITICAL"
            v-model="C143">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            :rules="[char]"
            required
            label="EGTISTICAL"
            v-model="C144">
            </v-text-field>
        </v-flex>
        </v-layout>
    </v-container>
    </v-layout>
    <v-layout row wrap>
    <v-container>
        <v-layout row wrap>
        <v-flex xs12 sm3>
            <v-text-field
            :rules="[char]"
            required
            label="SARCASTIC"
            v-model="C151">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            :rules="[char]"
            required
            label="STINGY"
            v-model="C152">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            :rules="[char]"
            required
            label="INDECISIVE"
            v-model="C153">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            :rules="[char]"
            required
            label="IMPULSIVE"
            v-model="C154">
            </v-text-field>
        </v-flex>
        </v-layout>
    </v-container>
    </v-layout>
    <v-layout row wrap>
    <v-container>
        <v-layout row wrap>
        <v-flex xs12 sm3>
            <v-text-field
            :rules="[char]"
            required
            label="PRACTICAL"
            v-model="C161">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            :rules="[char]"
            required
            label="STUBBORN"
            v-model="C162">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            :rules="[char]"
            required
            label="PESSIMISTIC"
            v-model="C163">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            :rules="[char]"
            required
            label="DIFFICULTY WITH APPOINTMENT"
            v-model="C164">
            </v-text-field>
        </v-flex>
        </v-layout>
    </v-container>
    </v-layout>
    <v-layout row wrap>
    <v-container>
        <v-layout row wrap>
        <v-flex xs12 sm3>
            <v-text-field
            :rules="[char]"
            required
            label="OUTGOING"
            v-model="C171">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            :rules="[char]"
            required
            label="SPECTATOR IN LIFE"
            v-model="C172">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            :rules="[char]"
            required
            label="IDEALISTIC"
            v-model="C173">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            :rules="[char]"
            required
            label="OPTIMISTIC"
            v-model="C174">
            </v-text-field>
        </v-flex>
        </v-layout>
    </v-container>
    </v-layout>
    <v-layout row wrap>
    <v-container>
        <v-layout row wrap>
        <v-flex xs12 sm3>
            <v-text-field
            :rules="[char]"
            required
            label="SELF-SUFFICIENT"
            v-model="C181">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            :rules="[char]"
            required
            label="WORKS WELL UNDER PRESSURE"
            v-model="C182">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            :rules="[char]"
            required
            label="INTROVERT"
            v-model="C183">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            :rules="[char]"
            required
            label="OUTGOING"
            v-model="C184">
            </v-text-field>
        </v-flex>
        </v-layout>
    </v-container>
    <v-btn color="primary" type="submit" @click="dialogTest=false">Exit</v-btn>
    <v-btn color="primary" type="submit" @click="(dialogTestNext=true) && (dialogTest=false)">Next</v-btn>
    </v-layout>
</v-container>
</template>

<script>
/* eslint-disable */
    export default {
        name: "Test",
          data () {
            return {
                C11: null,
                C12: null,
                C13: null,
                C14: null,
                C21: null,
                C22: null,
                C23: null,
                C24: null,
                C31: null,
                C32: null,
                C33: null,
                C34: null,
                C41: null,
                C42: null,
                C43: null,
                C44: null,
                C51: null,
                C52: null,
                C53: null,
                C54: null,
                C61: null,
                C62: null,
                C63: null,
                C64: null,
                C71: null,
                C72: null,
                C73: null,
                C74: null,
                C81: null,
                C82: null,
                C83: null,
                C84: null,
                C91: null,
                C92: null,
                C93: null,
                C94: null,
                C101: null,
                C102: null,
                C103: null,
                C104: null,
                C111: null,
                C112: null,
                C113: null,
                C114: null,
                C121: null,
                C122: null,
                C123: null,
                C124: null,
                C131: null,
                C132: null,
                C133: null,
                C134: null,
                C141: null,
                C142: null,
                C143: null,
                C144: null,
                C151: null,
                C152: null,
                C153: null,
                C154: null,
                C161: null,
                C162: null,
                C163: null,
                C164: null,
                C171: null,
                C172: null,
                C173: null,
                C174: null,
                C181: null,
                C182: null,
                C183: null,
                C184: null,
                rules:{
                    char: (value) => (/[1-5]/).test(value)
                }
                
            }
          }
    }
</script>

<style scoped>

</style>
