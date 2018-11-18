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
            min="1"
            max="5"
            label="OPTIMISTIC"
            v-model="C11">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            min="1"
            max="5"
            label="VERY QUIET"
            v-model="C12">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            min="1"
            max="5"
            label="DEEP FEELING"
            v-model="C13">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            min="1"
            max="5"
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
            min="1"
            max="5"
            label="GOAL-ORIENTED"
            v-model="C21">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            min="1"
            max="5"
            label="PESSIMISTIC"
            v-model="C22">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            min="1"
            max="5"
            label="SENSITIVE"
            v-model="C23">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            min="1"
            max="5"
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
            min="1"
            max="5"
            label="SELF-CONFIDENT"
            v-model="C31">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            min="1"
            max="5"
            label="INTROVERT"
            v-model="C32">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            min="1"
            max="5"
            label="SELF-CENTERED"
            v-model="C33">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            min="1"
            max="5"
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
            min="1"
            max="5"
            label="ACTIVIST"
            v-model="C41">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            min="1"
            max="5"
            label="NOT AGGRESSIVE"
            v-model="C42">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            min="1"
            max="5"
            label="EASILY OFFENDED"
            v-model="C43">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            min="1"
            max="5"
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
            min="1"
            max="5"
            label="DOMINANT"
            v-model="C51">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            min="1"
            max="5"
            label="INDECISIVE"
            v-model="C52">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            min="1"
            max="5"
            label="FAITHFUL FRIEND"
            v-model="C53">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            min="1"
            max="5"
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
            min="1"
            max="5"
            label="AGGRESSIVE"
            v-model="C61">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            min="1"
            max="5"
            label="SLOW AND LAZY"
            v-model="C62">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            min="1"
            max="5"
            label="SELF-SACRIFICING"
            v-model="C63">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            min="1"
            max="5"
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
            min="1"
            max="5"
            label="LEADERSHIP ABILITY"
            v-model="C71">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            min="1"
            max="5"
            label="EASY GOING"
            v-model="C72">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            min="1"
            max="5"
            label="LIKES BEHIND THE SCENES"
            v-model="C73">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            min="1"
            max="5"
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
            min="1"
            max="5"
            label="STICK-TO-IT-IVENESS"
            v-model="C81">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            min="1"
            max="5"
            label="CALM AND COOL"
            v-model="C82">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            min="1"
            max="5"
            label="SUSPICIOUS"
            v-model="C83">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            min="1"
            max="5"
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
            min="1"
            max="5"
            label="STRONG-WILLED"
            v-model="C91">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            min="1"
            max="5"
            label="EFFICIENT"
            v-model="C92">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            min="1"
            max="5"
            label="INTROSPECTIVE"
            v-model="C93">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            min="1"
            max="5"
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
            min="1"
            max="5"
            label="HOT-TEMPERED"
            v-model="C101">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            min="1"
            max="5"
            label="DEPENDABLE"
            v-model="C102">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            min="1"
            max="5"
            label="PERFECTIONNIST"
            v-model="C103">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            min="1"
            max="5"
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
            min="1"
            max="5"
            label="INSENSITIVE"
            v-model="C111">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            min="1"
            max="5"
            label="WITTY, DRY HUMOR"
            v-model="C112">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            min="1"
            max="5"
            label="HARBORS RESENTMENT"
            v-model="C113">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            min="1"
            max="5"
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
            min="1"
            max="5"
            label="UNSYMPATHETIC"
            v-model="C121">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            min="1"
            max="5"
            label="TEASES"
            v-model="C122">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            min="1"
            max="5"
            label="CREATIVE"
            v-model="C123">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            min="1"
            max="5"
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
            min="1"
            max="5"
            label="SO DETERMINED YOU GET DEPRESSED "
            v-model="C131">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            min="1"
            max="5"
            label="SELFISH"
            v-model="C132">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            min="1"
            max="5"
            label="MOODY"
            v-model="C133">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            min="1"
            max="5"
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
            min="1"
            max="5"
            label="DECISIVE"
            v-model="C141">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            min="1"
            max="5"
            label="ORDERLY HABITS"
            v-model="C142">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            min="1"
            max="5"
            label="CRITICAL"
            v-model="C143">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            min="1"
            max="5"
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
            min="1"
            max="5"
            label="SARCASTIC"
            v-model="C151">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            min="1"
            max="5"
            label="STINGY"
            v-model="C152">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            min="1"
            max="5"
            label="INDECISIVE"
            v-model="C153">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            min="1"
            max="5"
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
            min="1"
            max="5"
            label="PRACTICAL"
            v-model="C161">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            min="1"
            max="5"
            label="STUBBORN"
            v-model="C162">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            min="1"
            max="5"
            label="PESSIMISTIC"
            v-model="C163">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            min="1"
            max="5"
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
            min="1"
            max="5"
            label="OUTGOING"
            v-model="C171">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            min="1"
            max="5"
            label="SPECTATOR IN LIFE"
            v-model="C172">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            min="1"
            max="5"
            label="IDEALISTIC"
            v-model="C173">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            min="1"
            max="5"
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
            min="1"
            max="5"
            label="SELF-SUFFICIENT"
            v-model="C181">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            min="1"
            max="5"
            label="WORKS WELL UNDER PRESSURE"
            v-model="C182">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            min="1"
            max="5"
            label="INTROVERT"
            v-model="C183">
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-text-field
            min="1"
            max="5"
            label="OUTGOING"
            v-model="C184">
            </v-text-field>
        </v-flex>
        </v-layout>
    </v-container>
    <v-btn color="primary" to= "/"type="submit" @click="dialogTest=false">Exit</v-btn>
    <v-btn color="primary" type="submit" @click="rezTest">Next</v-btn>
    </v-layout>
    <v-dialog v-model="dialogRezTest" max-width="50%" persistent>
      <v-layout align-center justify-center>
        <v-flex>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>Result</v-toolbar-title>
            </v-toolbar><br>
            <v-card-text>
            <v-alert
              :value="true"
              type="success"
            >
              <h3></h3>
            </v-alert>
            </v-card-text>
              <v-btn color="primary" to="/" type="submit" @click="dialogRezTest=false" >Submit</v-btn>
          </v-card>
        </v-flex>
      </v-layout>
    </v-dialog>
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
                dialogRezTest: false
            }
          
          },
          methods: {
            rezTest () {
                var r1 = parseInt(this.C11)+parseInt(this.C21)+parseInt(this.C31)+parseInt(this.C41)+parseInt(this.C51)+parseInt(this.C61)+parseInt(this.C71)+parseInt(this.C81)+parseInt(this.C91)+parseInt(this.C101)+parseInt(this.C111)+parseInt(this.C121)+parseInt(this.C131)+parseInt(this.C141)+parseInt(this.C151)+parseInt(this.C161)+parseInt(this.C171)+parseInt(this.C181)
                var r2 = parseInt(this.C12)+parseInt(this.C22)+parseInt(this.C32)+parseInt(this.C42)+parseInt(this.C52)+parseInt(this.C62)+parseInt(this.C72)+parseInt(this.C82)+parseInt(this.C92)+parseInt(this.C102)+parseInt(this.C112)+parseInt(this.C122)+parseInt(this.C132)+parseInt(this.C142)+parseInt(this.C152)+parseInt(this.C162)+parseInt(this.C172)+parseInt(this.C182)
                var r3 = parseInt(this.C13)+parseInt(this.C23)+parseInt(this.C33)+parseInt(this.C43)+parseInt(this.C53)+parseInt(this.C63)+parseInt(this.C73)+parseInt(this.C83)+parseInt(this.C93)+parseInt(this.C103)+parseInt(this.C113)+parseInt(this.C123)+parseInt(this.C133)+parseInt(this.C143)+parseInt(this.C153)+parseInt(this.C163)+parseInt(this.C173)+parseInt(this.C183)
                var r4 = parseInt(this.C14)+parseInt(this.C24)+parseInt(this.C34)+parseInt(this.C44)+parseInt(this.C54)+parseInt(this.C64)+parseInt(this.C74)+parseInt(this.C84)+parseInt(this.C94)+parseInt(this.C104)+parseInt(this.C114)+parseInt(this.C124)+parseInt(this.C134)+parseInt(this.C144)+parseInt(this.C154)+parseInt(this.C164)+parseInt(this.C174)+parseInt(this.C184)
                }
          }
    }
</script>

<style scoped>

</style>
